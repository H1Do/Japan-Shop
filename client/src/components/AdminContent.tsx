import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './UI/Button/Button';
import { createBrand, createFigure, fetchBrands } from '../API/figureAPI';
import Input from './UI/Input/Input';

const AdminContent = () => {
  const [brandList, setBrandList] = useState<Array<Brand>>([]);
  const [selectedForm, setSelectedForm] = useState<'FIGURE' | 'BRAND' | null>(
    null,
  );
  const [isOutputShown, setIsOutputShown] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [files, setFiles] = useState<FileList | null>(null);
  const [brandId, setBrandId] = useState(0);

  const addFigure = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (brandId === 0) {
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', String(price));
    if (files) {
      formData.append('img', files[0]);
    }
    formData.append('brandId', brandId.toString());

    setName('');
    setPrice(0);
    setBrandId(0);
    setSelectedForm(null);

    createFigure(formData).then((result) => {
      console.log(result);
    });
  };

  const addBrand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createBrand(name).then((result) => {
      console.log(result);
    });
    setName('');
  };

  return (
    <div className="admin container">
      <div className="admin__inner">
        <div className="admin__actions">
          <ul className="admin__actions-list">
            {/* <li className="admin__actions-item">
              <Button className="admin__actions-button">
                Получить список пользователей
              </Button>
            </li>
            <li className="admin__actions-item">
              <Button className="admin__actions-button">
                Получить список товаров
              </Button>
            </li> */}
            <li className="admin__actions-item">
              <Button
                className="admin__actions-button"
                onClick={() => {
                  setSelectedForm(null);
                  setIsOutputShown(true);
                  fetchBrands().then((result) => {
                    setBrandList(result);
                  });
                }}
              >
                Получить список брендов
              </Button>
            </li>
            <li className="admin__actions-item">
              <Button
                className="admin__actions-button"
                onClick={() => {
                  fetchBrands().then((result) => {
                    setBrandList(result);
                  });
                  setSelectedForm('FIGURE');
                  setIsOutputShown(false);
                }}
              >
                Добавить товар
              </Button>
            </li>
            <li className="admin__actions-item">
              <Button
                className="admin__actions-button"
                onClick={() => {
                  setSelectedForm('BRAND');
                  setIsOutputShown(false);
                }}
              >
                Добавить бренд
              </Button>
            </li>
          </ul>
        </div>
        {selectedForm === 'FIGURE' ? (
          <form className="admin__form" onSubmit={addFigure}>
            <label className="admin__form-label">
              Название:
              <Input
                name="name"
                type="text"
                required
                value={name}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />
            </label>
            <label className="admin__form-label">
              Цена:
              <Input
                name="price"
                type="number"
                required
                value={price}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setPrice(+event.target.value);
                }}
              />
            </label>
            <label className="admin__form-label">
              Изображение:
              <Input
                name="img"
                type="file"
                required
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target) {
                    setFiles(event.target.files);
                  }
                }}
              />
            </label>
            <label className="admin__form-label">
              Бренд:
              <select
                name="brand"
                value={brandId}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                  if (event.target) {
                    setBrandId(+event.target.value);
                  }
                }}
              >
                <option value={0} disabled>
                  Выбрать бренд
                </option>
                {brandList.map((brand: Brand) => (
                  <option value={brand.id} key={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </label>
            <Button buttonType="submit" className="admin__form-button">
              Добавить
            </Button>
          </form>
        ) : selectedForm === 'BRAND' ? (
          <form className="admin__form" onSubmit={addBrand}>
            <label className="admin__form-label">
              Название:
              <Input
                name="name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <Button buttonType="submit">Добавить</Button>
          </form>
        ) : (
          ''
        )}
        {isOutputShown ? (
          <div className="admin__output">
            <h3 className="admin__output-title">Список брендов</h3>
            <ul className="admin__output-list">
              {brandList.map((brand: Brand) => (
                <li className="admin__output-item" key={brand.id}>
                  {brand.id} : {brand.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default AdminContent;

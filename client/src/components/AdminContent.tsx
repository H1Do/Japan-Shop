import Button from './UI/Button/Button';

const AdminContent = () => {
  return (
    <div className="admin container">
      <div className="admin__inner">
        <div className="admin__actions">
          <ul className="admin__actions-list">
            <li className="admin__actions-item">
              <Button className="admin__actions-button">
                Получить список пользователей
              </Button>
            </li>
            <li className="admin__actions-item">
              <Button className="admin__actions-button">
                Получить список товаров
              </Button>
            </li>
            <li className="admin__actions-item">
              <Button className="admin__actions-button">
                Получить список брендов
              </Button>
            </li>
            <li className="admin__actions-item">
              <Button className="admin__actions-button">Добавить товар</Button>
            </li>
            <li className="admin__actions-item">
              <Button className="admin__actions-button">Добавить бренд</Button>
            </li>
          </ul>
        </div>
        <div className="admin__output"></div>
      </div>
    </div>
  );
};

export default AdminContent;

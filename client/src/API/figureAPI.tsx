import { $authHost, $host } from './index';

export const createBrand = async (brand: Brand) => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const createFigure = async (figure: Figure) => {
  const { data } = await $authHost.post('api/figure', figure);
  return data;
};

export const fetchFigures = async () => {
  const { data } = await $host.get('api/figure');
  return data;
};

export const fetchOneFigure = async (id: string) => {
  const { data } = await $host.get(`api/figure/${id}`);
  return data;
};

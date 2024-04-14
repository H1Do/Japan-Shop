import { $authHost, $host } from './index';

export const createBrand = async (brandName: string) => {
  const { data } = await $authHost.post('api/brand', { name: brandName });
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const createFigure = async (figure: FormData) => {
  const { data } = await $authHost.post('api/figure', figure);
  return data;
};

export const fetchFigures = async (limit = 9, page = 1, search = '') => {
  const { data } = await $host.get('api/figure', {
    params: {
      page,
      limit,
      search,
    },
  });
  return data;
};

export const fetchOneFigure = async (id: string) => {
  const { data } = await $host.get(`api/figure/${id}`);
  return data;
};

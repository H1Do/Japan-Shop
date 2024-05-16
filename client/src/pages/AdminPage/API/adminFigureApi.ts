import { $authHost } from '../../../API';

export const createBrand = async (brandName: string) => {
  const { data } = await $authHost.post('api/brand', { name: brandName });
  return data;
};

export const createFigure = async (figure: FormData) => {
  const { data } = await $authHost.post('api/figure', figure);
  return data;
};

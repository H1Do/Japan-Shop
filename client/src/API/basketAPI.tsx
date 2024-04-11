import { $authHost } from './index';

export const addToBasket = async (figure: Figure) => {
  const { data } = await $authHost.post('api/basket', {
    figure_id: figure.id,
  });
  return data;
};

export const removeFromBasket = async (figure: Figure) => {
  const { data } = await $authHost.delete(`api/basket/${figure.id}`);
  return data;
};

export const fetchBasket = async () => {
  const { data } = await $authHost.get('api/basket');
  return data;
};

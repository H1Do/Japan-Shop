import { $authHost } from './index';

export const addToFavorite = async (figure: Figure) => {
  const { data } = await $authHost.post('api/favorite', {
    figure_id: figure.id,
  });
  return data;
};

export const removeFromFavorite = async (figure: Figure) => {
  const { data } = await $authHost.delete(`api/favorite/${figure.id}`);
  return data;
};

export const fetchFavorite = async () => {
  const { data } = await $authHost.get('api/favorite');
  return data;
};

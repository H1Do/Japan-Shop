import { $authHost } from '../../../API';

export const removeFromFavorite = async (figure: Figure) => {
  const { data } = await $authHost.delete(`api/favorite/${figure.id}`);
  return data;
};

export const fetchFavorite = async () => {
  const { data } = await $authHost.get('api/favorite');
  return data;
};

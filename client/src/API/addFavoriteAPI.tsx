import { $authHost } from '.';

export const addToFavorite = async (figure: Figure) => {
  const { data } = await $authHost.post('api/favorite', {
    figure_id: figure.id,
  });
  return data;
};

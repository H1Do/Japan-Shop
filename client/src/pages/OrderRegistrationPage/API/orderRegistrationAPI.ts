import { $authHost } from '../../../API';

export const createOrder = async (
  figures: Array<Figure>,
  price: number,
  date: number,
) => {
  const { data } = await $authHost.post('api/orders', {
    figures_id: figures.map((figure) => figure.id),
    price,
    date,
  });
  return data;
};

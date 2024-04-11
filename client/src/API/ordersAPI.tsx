import { $authHost } from './index';

export const createOrder = async (figures: Array<Figure>, price, date) => {
  const { data } = await $authHost.post('api/orders', {
    figures_id: figures.map((figure) => figure.id),
    price,
    date,
  });
  return data;
};

export const fetchOrders = async () => {
  const { data } = await $authHost.get('api/orders');
  return data;
};

export const fetchOneOrder = async (id: string) => {
  const { data } = await $authHost.get(`api/orders/${id}`);
  return data;
};

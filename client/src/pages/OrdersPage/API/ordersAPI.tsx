import { $authHost } from '../../../API';

export const fetchOrders = async () => {
  const { data } = await $authHost.get('api/orders');
  return data;
};

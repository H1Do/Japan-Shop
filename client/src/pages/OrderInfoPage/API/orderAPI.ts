import { $authHost } from '../../../API';

export const fetchOneOrder = async (id: string) => {
  const { data } = await $authHost.get(`api/orders/${id}`);
  return data;
};

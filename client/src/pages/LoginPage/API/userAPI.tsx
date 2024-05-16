import { JwtPayload, jwtDecode } from 'jwt-decode';
import { $authHost, $host } from '../../../API';

interface JwtPayloadWithUser extends JwtPayload {
  role: string;
  email: string;
  password: string;
}

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post('api/user/registration', {
    email,
    password,
    role: 'USER',
  });
  localStorage.setItem('token', data.token);
  return jwtDecode<JwtPayloadWithUser>(data.token);
};

export const login = async (email: string, password: string) => {
  const { data } = await $host.post('api/user/login', {
    email,
    password,
  });
  localStorage.setItem('token', data.token);
  return jwtDecode<JwtPayloadWithUser>(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwtDecode<JwtPayloadWithUser>(data.token);
};

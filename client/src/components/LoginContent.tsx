import Button from './UI/Button/Button';
import { FormEvent, useContext, useState } from 'react';
import { login, registration } from '../API/userAPI';
import { MainContext } from '../context';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const SignUpContent = observer(() => {
  const { user } = useContext(MainContext);
  const [isRegistration, setIsRegistration] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');
  const [isPasswordMatch, setPasswordMatch] = useState(true);
  const [requestError, setRequestError] = useState('');
  const navigate = useNavigate();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      let data;
      if (isRegistration) {
        if (password !== passwordAgain) {
          console.log('Пароли не совпадают');
          setPasswordMatch(false);
          return;
        }
        data = await registration(email, password);
      } else {
        data = await login(email, password);
      }

      setRequestError('');
      user.setUser(data);
      user.setIsAuth(true);

      if (data.role === 'ADMIN') {
        user.setIsAdmin(true);
      }
      navigate('/');
    } catch (error) {
      setRequestError(error.response.data.message);
    }
  };

  return (
    <div className="signin container">
      <div className="signin__inner">
        <h2 className="signin__title">
          {isRegistration ? 'Регистрация' : 'Вход'}
        </h2>
        <form className="signin__form" onSubmit={submit}>
          <label className="visually-hidden" htmlFor="email">
            Write email
          </label>
          <input
            required
            type="email"
            className="signin__form-input"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event?.target.value);
              setRequestError('');
            }}
          />
          <label className="visually-hidden" htmlFor="password">
            Write password
          </label>
          <input
            required
            type="password"
            className={`signin__form-input ${!isPasswordMatch ? 'signin__form-input--warning' : ''}`}
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event?.target.value);
              setPasswordMatch(true);
            }}
          />
          {isRegistration ? (
            <>
              <label className="visually-hidden" htmlFor="confirm-password">
                Confirm your password
              </label>
              <input
                required
                type="password"
                className={`signin__form-input ${!isPasswordMatch ? 'signin__form-input--warning' : ''}`}
                name="password"
                id="confirm-password"
                placeholder="Confirm password"
                value={passwordAgain}
                onChange={(event) => {
                  setPasswordAgain(event?.target.value);
                  setPasswordMatch(true);
                }}
              />
            </>
          ) : (
            ''
          )}

          {isRegistration ? (
            <Button
              className="signin__form-link"
              onClick={() => {
                setIsRegistration(false);
                setPasswordMatch(true);
                setRequestError('');
              }}
            >
              У меня уже есть аккаунт...
            </Button>
          ) : (
            <Button
              className="signin__form-link"
              onClick={() => {
                setIsRegistration(true);
                setPasswordMatch(true);
                setRequestError('');
              }}
            >
              У меня нет аккаунта...
            </Button>
          )}

          <Button className="signin__form-button" buttonType="submit">
            {isRegistration ? 'Создать аккаунт' : 'Вход'}
          </Button>
          {!isPasswordMatch ? (
            <div className="signin__form-warning">
              Введенные пароли не совпадают
            </div>
          ) : (
            ''
          )}
          <div className="signin__form-warning">{requestError}</div>
        </form>
      </div>
    </div>
  );
});

export default SignUpContent;

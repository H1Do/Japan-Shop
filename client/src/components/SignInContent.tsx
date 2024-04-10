import { Link } from 'react-router-dom';
import Button from './UI/Button/Button';
import { FormEvent, useContext, useState } from 'react';
import { MainContext } from '../context';

const SignInContent = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="signin container">
      <div className="signin__inner">
        <h2 className="signin__title">Вход</h2>
        <form className="signin__form" onSubmit={submit}>
          <label className="visually-hidden" htmlFor="email">
            Write email
          </label>
          <input
            required
            type="text"
            className="signin__form-input"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label className="visually-hidden" htmlFor="password">
            Write password
          </label>
          <input
            required
            type="password"
            className="signin__form-input"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Link className="signin__form-link" to="/signup">
            У меня нет аккаунта...
          </Link>
          <Button className="signin__form-button" buttonType="submit">
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignInContent;

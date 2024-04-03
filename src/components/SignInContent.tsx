import { Link } from 'react-router-dom';
import Button from './UI/Button/Button';

const SignInContent = () => {
  return (
    <div className="signin container">
      <div className="signin__inner">
        <h2 className="signin__title">Вход</h2>
        <form className="signin__form">
          <label className="visually-hidden" htmlFor="login">
            Write login
          </label>
          <input
            required
            type="text"
            className="signin__form-input"
            name="login"
            id="login"
            placeholder="Login"
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

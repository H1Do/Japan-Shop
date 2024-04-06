import { Link } from 'react-router-dom';
import Button from './UI/Button/Button';

const SignUpContent = () => {
  return (
    <div className="signin container">
      <div className="signin__inner">
        <h2 className="signin__title">Регистрация</h2>
        <form className="signin__form">
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
          />
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
          <label className="visually-hidden" htmlFor="confirm-password">
            Confirm your password
          </label>
          <input
            required
            type="password"
            className="signin__form-input"
            name="password"
            id="confirm-password"
            placeholder="Confirm password"
          />
          <Link className="signin__form-link" to="/signin">
            У меня уже есть аккаунт...
          </Link>
          <Button className="signin__form-button" buttonType="submit">
            Создать аккаунт
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpContent;

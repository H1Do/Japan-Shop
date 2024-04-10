import { Link } from 'react-router-dom';
import Button from './UI/Button/Button';
import { FormEvent, useState } from 'react';

const SignUpContent = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordAgain, setPasswordAgain] = useState<string>();
  const [isPasswordMatch, setPasswordMatch] = useState(true);

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    if (password !== passwordAgain) {
      console.log('Пароли не совпадают');
      setPasswordMatch(false);
    }
  };

  return (
    <div className="signin container">
      <div className="signin__inner">
        <h2 className="signin__title">Регистрация</h2>
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
            onChange={(event) => setEmail(event?.target.value)}
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
          <Link className="signin__form-link" to="/signin">
            У меня уже есть аккаунт...
          </Link>
          <Button className="signin__form-button" buttonType="submit">
            Создать аккаунт
          </Button>
          {!isPasswordMatch ? (
            <div className="signin__form-warning">
              Введенные пароли не совпадают
            </div>
          ) : (
            ''
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUpContent;

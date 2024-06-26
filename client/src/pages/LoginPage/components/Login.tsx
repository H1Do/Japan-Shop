import { Header } from '../../../modules/Header';
import LoginContent from '../components/LoginContent';

const SignUp = () => {
  return (
    <div className="App">
      <Header selectedItem="login" />
      <LoginContent />
    </div>
  );
};

export default SignUp;

import Header from '../components/Header';
import SignInContent from '../components/SignInContent';

const SignIn = () => {
  return (
    <div className="App">
      <Header selectedItem="login" />
      <SignInContent />
    </div>
  );
};

export default SignIn;

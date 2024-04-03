import Header from '../components/Header';
import SignUpContent from './../components/SignUpContent';

const SignUp = () => {
  return (
    <div className="App">
      <Header selectedItem="login" />
      <SignUpContent />
    </div>
  );
};

export default SignUp;

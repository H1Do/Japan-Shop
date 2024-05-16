import { Header } from '../../../modules/Header';
import MainContent from '../components/MainContent';
import { Footer } from '../../../modules/Footer';

const Main = () => {
  return (
    <div className="App">
      <Header selectedItem="main" />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Main;

import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

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

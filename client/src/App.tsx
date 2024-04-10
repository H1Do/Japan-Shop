import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import AppRouter from './components/AppRouter';
import { MainContext } from './context';
import UserStore from './store/UserStore';
import FigureStore from './store/FigureStore';

function App() {
  return (
    <MainContext.Provider
      value={{ user: new UserStore(), figure: new FigureStore() }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/styles.scss';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

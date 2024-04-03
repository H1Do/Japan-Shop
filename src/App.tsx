import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/styles.scss';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

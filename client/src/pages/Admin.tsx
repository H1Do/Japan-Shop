import Header from '../components/Header';
import AdminContent from './../components/AdminContent';

const Admin = () => {
  return (
    <div className="App">
      <Header selectedItem="admin" />
      <AdminContent />
    </div>
  );
};

export default Admin;

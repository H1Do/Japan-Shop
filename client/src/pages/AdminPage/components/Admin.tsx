import Header from '../../../modules/Header/components/Header';
import AdminContent from './AdminContent';

const Admin = () => {
  return (
    <div className="App">
      <Header selectedItem="admin" />
      <AdminContent />
    </div>
  );
};

export default Admin;

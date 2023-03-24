import './App.css';
import AddProduct from './components/AddProduct';
import ShowProduct from './components/ShowProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5 ">
        <div className="row">
          <Routes>
            <Route path="/" element={<ShowProduct />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

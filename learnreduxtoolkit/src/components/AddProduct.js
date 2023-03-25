import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../features/productSlice';
import { saveProducts } from '../features/productSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();
    await dispatch(saveProducts({ title, price }));
    navigate('/');
  };

  return (
    <div className="card p-4">
      <form onSubmit={createProduct}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Tambah Produk
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

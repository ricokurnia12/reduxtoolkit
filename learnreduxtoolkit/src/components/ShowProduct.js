import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getProducts,
  productSelectors,
  deleteProducts,
} from '../features/productSlice';
import { Link } from 'react-router-dom';

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="card p-2 text-center">
      <h3>Learn Redux Toolkit</h3>
      <hr />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price $</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  to={`edit/${product.id}`}
                  className="btn btn-sm btn-warning me-2"
                >
                  edit
                </Link>
                <button
                  onClick={() => dispatch(deleteProducts(product.id))}
                  className="btn btn-sm btn-danger"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="add" className="m-auto w-50 btn btn-success">
        Add Product
      </Link>
    </div>
  );
};

export default ShowProduct;

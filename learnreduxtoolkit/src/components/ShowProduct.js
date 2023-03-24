import React from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux';
import { getProducts } from '../features/productSlice';
const ShowProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return <div className="card p-2"></div>;
};

export default ShowProduct;

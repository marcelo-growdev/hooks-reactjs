import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutDefault from '../config/layout/Default';

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import AddProduct from '../pages/products/AddProduct';
import Products from '../pages/products/Products';
import ProductsDisable from '../pages/products/ProductsDisable';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault component={Home} />} />
        <Route path="/login" element={<LayoutDefault component={Login} />} />
        <Route
          path="/products"
          element={<LayoutDefault component={Products} />}
        />
        <Route
          path="/add-product"
          element={<LayoutDefault component={AddProduct} />}
        />
        <Route
          path="/products-disable"
          element={<LayoutDefault component={ProductsDisable} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

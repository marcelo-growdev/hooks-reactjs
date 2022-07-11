import { Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { create } from '../../store/modules/products/actions';
import { IProduct } from '../../store/modules/products/reducer';
import { IUser } from '../../store/modules/user/reducer';

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productsRedux: IProduct[] = useSelector((state: any) => state.products);

  const addProduct = () => {
    navigate('/add-product');
  };

  return (
    <div>
      <Typography variant="h2">Products</Typography>
      <Button variant="outlined" onClick={addProduct}>
        Adicionar Produto
      </Button>
      <Divider sx={{ margin: '20px' }} />
      <Typography variant="h3">Lista de produtos</Typography>
      {productsRedux.map((product) => {
        return (
          <div key={product.title}>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="h5">{product.price}</Typography>
            <Divider sx={{ margin: '20px' }} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;

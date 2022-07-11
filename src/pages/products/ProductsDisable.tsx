import { Button, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { create } from '../../store/modules/products/actions';
import { IProduct } from '../../store/modules/products/reducer';
import { IUser } from '../../store/modules/user/reducer';

const ProductsDisable: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState<IProduct[]>([]);

  const productsRedux: IProduct[] = useSelector((state: any) => state.products);

  useEffect(() => {
    if (productsRedux.length) {
      const tempFiltered = productsRedux.filter(
        (product) => product.enable === false
      );

      setFiltered(tempFiltered);
    }
  }, [productsRedux]);

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
      <Typography variant="h3">Lista de produtos inativos</Typography>
      {filtered.map((product) => {
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

export default ProductsDisable;

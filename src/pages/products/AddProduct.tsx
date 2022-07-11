import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from '../../store/modules/products/actions';

const AddProduct: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const dispatch = useDispatch();

  const addProduct = () => {
    console.log('Adicionando produto...');
    dispatch(create({ title, price, enable: false }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Nome do produto"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Preço do produto"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" onClick={addProduct}>
          Adicionar
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddProduct;

import React, { useEffect, useState, useRef } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';

const Home: React.FC = () => {
  const [description, setDescription] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    setDescription('Adicionado valor!');
  };

  // VAI EXECUTAR QUANDO INICIAR OU MONTAR O COMPONENT
  useEffect(() => {
    console.log('Montado o componente...');

    inputRef.current?.focus();
  }, []);

  // VAI EXECUTAR QUANDO ALTERAR O VALOR DO MEU ESTADO(DEPENDENCIA)
  useEffect(() => {
    console.log('Alterado valor...', description);
  }, [description]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">useState</Typography>
        <Typography variant="body2">{description}</Typography>
        <Button variant="outlined" onClick={handleChange}>
          Trocar texto
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3">useRef</Typography>
        <TextField type="text" label="Digite seu texto" inputRef={inputRef} />
      </Grid>
    </Grid>
  );
};

export default Home;

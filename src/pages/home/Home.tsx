import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { Button, Divider, Grid, TextField, Typography } from '@mui/material';

const Home: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);
  const [numTimes, setNumTimes] = useState<number>(0);
  const [multi, setMulti] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const handleChange = () => {
    if (description === 'Adicionado valor!') {
      setDescription('Trocou de valor novamente...');
      return;
    }

    setDescription('Adicionado valor!');
  };

  // const handleSort = () => {
  //   let sort = 0;

  //   do {
  //     sort = Math.floor(Math.random() * 1000);
  //   } while (sort < 100);

  //   console.log('outra funcao');
  //   console.log(sort);

  //   return sort;
  // };

  const handleSortMemo = useMemo(() => {
    let sort = 0;

    if (numTimes && counter) {
      for (let index = 1; index <= numTimes; index += 1) {
        sort = Math.floor(Math.random() * 1000);

        console.log(`Sorteando... Vezes: ${index}`);
        console.log(sort);
      }
    }
    return sort;
  }, [counter]);

  const handleMulti = useCallback(
    (n: number) => {
      console.log('executou o callback.');
      setMulti(counter * n);
    },
    [counter]
  );

  const handleSend = () => {
    if (!name) {
      inputRef.current?.focus();
      divRef.current?.setAttribute('style', 'background-color: red');
    }
    console.log(name);
  };

  // VAI EXECUTAR QUANDO INICIAR OU MONTAR O COMPONENT
  useEffect(() => {
    console.log('Iniciando aplicação...');

    return () => {
      console.log('Desmontando aplicação...');
    };
  }, []);

  // VAI EXECUTAR QUANDO O VALOR DA MINHA DEPENDENCIA ALTERAR
  useEffect(() => {
    console.log('Alterado o valor do description.');
  }, [description]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">useState</Typography>
        <div style={{ height: '50px' }}>
          <Typography variant="body2">{description}</Typography>
        </div>
        <Button variant="outlined" onClick={handleChange}>
          Trocar texto
        </Button>
        <Divider sx={{ margin: '20px' }} />
      </Grid>

      <Grid item ref={divRef} xs={12}>
        <Typography variant="h3">useRef</Typography>
        <TextField
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Digite seu texto"
          inputRef={inputRef}
        />
        <br />
        <br />
        <Button variant="outlined" onClick={handleSend}>
          Enviar
        </Button>
        <Divider sx={{ margin: '20px' }} />
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography variant="h3">useMemo</Typography>
          <Typography variant="body2">Número sorteado:</Typography>
          <Typography variant="h4">{handleSortMemo}</Typography>
          <br />
          <br />
          <TextField
            type="number"
            value={numTimes}
            onChange={(e) => setNumTimes(Number(e.target.value))}
            label="Digite quantas vezes vai sortear o numero"
            inputRef={inputRef}
          />
          <br />
          <br />
          <Button variant="outlined" onClick={() => setCounter((n) => n + 1)}>
            Sortear número
          </Button>
        </Grid>
        <Grid item xs={6}>
          Número de vezes que foi sorteado: {counter}
        </Grid>
        <Divider sx={{ margin: '20px' }} />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3">useCallback</Typography>
        <Typography variant="body2">Multiplicacao do contador:</Typography>
        <Typography variant="h4">{multi}</Typography>
        <br />
        <br />
        <Button onClick={() => handleMulti(1000)}>Excutar callback</Button>
        <Divider sx={{ margin: '20px' }} />
      </Grid>
    </Grid>
  );
};

export default Home;

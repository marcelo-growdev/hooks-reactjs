import React from 'react';

import { Grid, Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'secondary.main',
        padding: '20px',
        color: 'white',
        minHeight: '50px',
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center">Desenvolvido por Growdev.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

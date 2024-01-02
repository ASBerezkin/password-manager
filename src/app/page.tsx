import * as React from 'react';
import { Grid, Button, Typography, Container, TextField } from '@mui/material';
import classes from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Container className={classes.main}>
      <Grid container justifyContent="center" alignItems="center" rowSpacing={2}>
        <Grid item xs={8} md={8}>
          <Typography variant="h5" component="h1" align="center">
            Войти
          </Typography>
        </Grid>
        <Grid item xs={8} md={8}>
          <Grid container columns={8} justifyContent="center">
            <TextField size="small" label="Email" type="email" variant="standard" />
          </Grid>
        </Grid>
        <Grid item xs={8} md={8}>
          <Grid container columns={8} justifyContent="center">
            <TextField size="small" label="Password" type="password" variant="standard" />
          </Grid>
        </Grid>
        <Grid item justifyContent="center" sx={{ mt: 2 }} xs={8} md={8}>
          <Grid container columns={8} justifyContent="center" columnGap={2}>
            <Button
              href="/passwords"
              LinkComponent={Link as React.ElementType}
              variant="outlined"
              sx={{ mr: 2 }}
            >
              Вход
            </Button>
            <Button href="/registration" variant="contained">
              Регистрация
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

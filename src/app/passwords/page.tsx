import { Box, Button, ButtonGroup, Container, Grid, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import PasswordItem from '@/components/PasswordItem';

export default function Passwords() {
  return (
    <Container sx={{ pt: 2 }}>
      <Grid container justifyContent="space-between">
        <Typography variant="h5">Домашняя страница</Typography>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button size="small">Добавить новый пароль</Button>
          <Button href="/" LinkComponent={Link as React.ElementType} size="small" color="error">
            Выход
          </Button>
        </ButtonGroup>
      </Grid>
      <Box component="form" mt={2}>
        <TextField
          fullWidth
          label="Поиск"
          type="search"
          size="medium"
          color="primary"
          placeholder="Найти пароль"
        />
        <PasswordItem />
      </Box>
    </Container>
  );
}

'use client';
import { Button, Divider, Grid, IconButton, Popover, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import classes from './styles.module.scss';
import { useState, MouseEvent } from 'react';

const PasswordItem = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = !!anchorEl;
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.container}
      >
        <Grid item>
          <Typography variant="subtitle1">Name</Typography>
          <Typography variant="subtitle2">Login</Typography>
        </Grid>
        <Grid item>
          <IconButton color="primary" size="small">
            <ContentCopyIcon />
          </IconButton>
          <IconButton color="primary" size="small" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Grid container direction="column">
              <Button onClick={handleClose}>Скопировать пароль</Button>
              <Button onClick={handleClose}>Скопировать сайт</Button>
              <Button onClick={handleClose}>Скопировать логин</Button>
            </Grid>
          </Popover>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default PasswordItem;

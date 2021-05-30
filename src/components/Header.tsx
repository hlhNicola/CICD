import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: '#FFE2EC'
  },
  grow: {
    flexGrow: 1,
    color: '#F60057'
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Calorie Simulator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
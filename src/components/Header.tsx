import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from '../components/SearchInput';
import { useSelector } from 'react-redux';
import { getSurveyStatus } from '../features/Survey/selectors';

const useStyles = makeStyles({
  root: {
    background: '#FFE2EC',
    width: "100%"
  },
  grow: {
    flexGrow: 1,
    color: '#F60057'
  },
});

export default function Header() {
  const classes = useStyles();
  const status = useSelector(getSurveyStatus)

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Calorie Simulator （only for female by now) hellp world
        </Typography>
        {status ? <SearchInput/> : null}
      </Toolbar>
    </AppBar>
  );
};
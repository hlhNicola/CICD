import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { actions } from '../features/Food/reducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);

export default function SearchInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('')
  const searchOptions = (value: string) => {
    dispatch(actions.foodAutoCompleteRequest(value))
  }
  const submitHandler = (e: any) => {
    e.preventDefault()
  }
  
  return (
    <Paper component="form" className={classes.root} onSubmit={submitHandler}>
      <InputBase
        className={classes.input}
        placeholder="Search Your Meal"
        inputProps={{ 'aria-label': 'search meal ingr' }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
      />
      <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={() => searchOptions(inputValue)}>
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
}



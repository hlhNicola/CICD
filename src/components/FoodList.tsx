import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import * as selectors from '../features/Food/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../features/Food/reducer';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
        width: '300px'
    }
  }),
);

export default function FoodList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const options = useSelector(selectors.getOptions);
  const getFooditems = (foodItem: string) => {
    dispatch(actions.fooditemsRequest(foodItem))
  }


  const listItems = options.map((item, index) => {
    return  (
        <ListItem key={index} button>
            <ListItemText primary={item} onClick={() => getFooditems(item) }/>
        </ListItem>)
  })
  
  
          
  if(options.length === 0){
      return null
  }
  else{
    return (
        <Paper className={classes.paper}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    Do you mean one of following ingredients ?
                    </ListSubheader>
                }
                className={classes.root}
            >
            {listItems}
            </List>
        </Paper>
        
      );
  }
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from './MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function FilterMenu(props) {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Filter Menu
        </ListSubheader>
      }
      className={classes.root}
    >
      <MenuItem
        icon="folder"
        name="Categories"
        items={props.items["categories"]}
        filtered={props.filtered["categories"]}
        handler={props.handler}
      />
      <MenuItem
        icon="offer"
        name="Tags"
        items={props.items["tags"]}
        filtered={props.filtered["tags"]}
        handler={props.handler}
      />
      <MenuItem
        icon="money"
        name="Cost"
        items={props.items["costs"]}
        filtered={props.filtered["costs"]}
        handler={props.handler}
      />
      <MenuItem
        icon="book"
        name="Resource Type"
        items={props.items["types"]}
        filtered={props.filtered["types"]}
        handler={props.handler}
      />
      <MenuItem
        icon="work"
        name="Interview Stage"
        items={props.items["stages"]}
        filtered={props.filtered["stages"]}
        handler={props.handler}
      />
    </List>
  );
}
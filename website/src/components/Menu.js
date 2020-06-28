import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from './MenuItem';
import { CATEGORIES, TAGS, COSTS, TYPES, STAGES } from '../constants/filters';

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

  const { filtered, handler } = props
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
        items={CATEGORIES}
        filtered={filtered["categories"]}
        handler={handler}
      />
      <MenuItem
        icon="offer"
        name="Tags"
        items={TAGS}
        filtered={filtered["tags"]}
        handler={handler}
      />
      <MenuItem
        icon="money"
        name="Cost"
        items={COSTS}
        filtered={filtered["costs"]}
        handler={handler}
      />
      <MenuItem
        icon="book"
        name="Resource Type"
        items={TYPES}
        filtered={filtered["types"]}
        handler={handler}
      />
      <MenuItem
        icon="work"
        name="Interview Stage"
        items={STAGES}
        filtered={filtered["stages"]}
        handler={handler}
      />
    </List>
  );
}
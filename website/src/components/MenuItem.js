import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FolderIcon from '@material-ui/icons/Folder';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import WorkIcon from '@material-ui/icons/Work';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';

const iconMap = {
  "folder": <FolderIcon/>,
  "offer": <LocalOfferIcon/>,
  "money": <AttachMoneyIcon/>,
  "book": <MenuBookIcon/>,
  "work": <WorkIcon/>,
}

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function MenuItem(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  };

  return (
    <>
      <ListItem button onClick={toggleOpen}>
        <ListItemIcon>
          {iconMap[props.icon]}
        </ListItemIcon>
        <ListItemText primary={props.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.items.map((value, index) => {
            const labelId = `checkbox-list-label-${index}`;

            return (
              <ListItem button key={value} className={classes.nested}  onClick={props.handler}>
                <ListItemText id={labelId} primary={value} />
                  <Checkbox
                      edge="start"
                      checked={props.filtered.indexOf(value) !== -1}
                      tabIndex={-1}
                      inputProps={{ 'aria-labelledby': labelId }}
                      color="primary"
                  />
              </ListItem>
            );
        })}
        </List>
      </Collapse>
    </>
  )
}
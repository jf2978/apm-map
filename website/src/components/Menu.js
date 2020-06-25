import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import FolderRoundedIcon from '@material-ui/icons/FolderRounded';
import FolderIcon from '@material-ui/icons/Folder';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CreateIcon from '@material-ui/icons/Create';
import WorkIcon from '@material-ui/icons/Work';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

// filterable types
const categories = [
  "Build PM Community",
  "General",
  "Interview Prep",
  "Mock Interviews",
  "Post-Offer",
  "Researching APM Programs",
  "Technical/System Design Interviews",
  "Understand Why PM"
];

const tags = [
  "Advice from an A/PM",
  "Advanced Interview Tips",
  "Google APM",
  "Understand why PM",
  "Facebook RPM",
  "APM Recruiting Overview",
  "Build PM skills",
  "Company Guides",
  "Evaluating APM programs",
  "Events",
  "Mock Interviews",
  "Networking",
  "Interview Prep",
  "Estimation",
  "Interview Questions",
  "1-1 Coffee Chats",
  "Mentorship",
  "Tech News",
  "Side Projects",
  "Referrals",
];

const costs = [
  "$",
  "$$",
  "$$$",
];

const types = [
  "Blog",
  "Book Chapter",
  "Community",
  "Course",
  "Facebook Group",
  "Facebook Note",
  "Google Doc",
  "Medium Article",
  "Mentoring Platform",
  "Notion Page",
  "PDF",
  "Podcast",
  "Website",
  "YouTube Channel",
];

const stages = [
  "Early",
  "Mid",
  "Advanced",
];

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

export default function FilterMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      component="nav"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Category" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map((value, index) => {
            const labelId = `checkbox-list-label-${index}`;

            return (
              <ListItem button key={value} className={classes.nested}  onClick={handleToggle(value)}>
                <ListItemText id={labelId} primary={value} />
                  <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      inputProps={{ 'aria-labelledby': labelId }}
                      color="primary"
                  />
              </ListItem>
            );
        })}
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <LocalOfferIcon />
        </ListItemIcon>
        <ListItemText primary="Tags" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Cost" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Resource Type" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Interview Stage" />
      </ListItem>
    </List>
  );
}
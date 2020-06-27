import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from './MenuItem';

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
        iconType="folder"
        name="Categories"
        items={categories}
      />
      <MenuItem
        iconType="offer"
        name="Tags"
        items={tags}
      />
      <MenuItem
        iconType="money"
        name="Cost"
        items={costs}
      />
      <MenuItem
        iconType="book"
        name="Resource Type"
        items={types}
      />
      <MenuItem
        iconType="work"
        name="Interview Stage"
        items={stages}
      />
    </List>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import DirectoryGrid from './DirectoryGrid';
import FilterMenu from './Menu';

// filterable types
const allFilters = {
  "categories": [
    "Build PM Community",
    "General",
    "Interview Prep",
    "Mock Interviews",
    "Post-Offer",
    "Researching APM Programs",
    "Technical/System Design Interviews",
    "Understand Why PM"
  ],
  "tags": [
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
  ],
  "costs": [
    "$",
    "$$",
    "$$$",
  ],
  "types": [
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
  ],
  "stages": [
    "Early",
    "Mid",
    "Advanced",
  ]
}

const useStyles = makeStyles((theme) => ({
  directory: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

export default function Directory() {
  const classes = useStyles();

  const [filters, setFilters] = React.useState(allFilters);
  const toggleFilter = (key, value) => {
    console.log("called!!!")
    console.log(key)
    console.log(filters[key])

    const subFilters = filters[key]
    const currentIndex = subFilters.indexOf(value);
    const newSubFilters = [...subFilters];

    if (currentIndex === -1) {
      newSubFilters.push(value);
    } else {
      newSubFilters.splice(currentIndex, 1);
    }

    console.log(newSubFilters)

    filters[key] = newSubFilters

    setFilters(filters);

    console.log(filters[key].indexOf(value) !== -1)
  };

  return (
    <Container maxWidth="xl" className={classes.directory}>
      <FilterMenu
        items={allFilters}
        filtered={filters}
        handler={toggleFilter}
      />
      <DirectoryGrid
        filtered={filters}
      />
    </Container>
  );
}
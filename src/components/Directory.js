import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import DirectoryGrid from './DirectoryGrid';
import FilterMenu from './Menu';
import { CATEGORIES, TAGS, COSTS, TYPES, STAGES } from '../constants/filters';

const useStyles = makeStyles((theme) => ({
  directory: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

export default function Directory() {
  const classes = useStyles();

  // Filter state
  const [categories, setCategories] = React.useState(CATEGORIES)
  const [tags, setTags] = React.useState(TAGS)
  const [costs, setCosts] = React.useState(COSTS)
  const [types, setTypes] = React.useState(TYPES)
  const [stages, setStages] = React.useState(STAGES)

  const toggleFilter = (key, value) => {
    switch(key) {
      case "categories":
        let newCategories = updateFilter(categories, value)
        setCategories(newCategories)
        break;
      case "tags":
        let newTags = updateFilter(tags, value)
        setTags(newTags)
        break;
      case "costs":
        let newCosts = updateFilter(costs, value)
        setCosts(newCosts)
        break;
      case "types":
        let newTypes = updateFilter(types, value)
        setTypes(newTypes)
        break;
      case "stages":
        let newStages = updateFilter(stages, value)
        setStages(newStages)
        break;
    }
  };

  const updateFilter = (arr, value) => {
    const currentIndex = arr.indexOf(value);
    const newArr = [...arr];

    if (currentIndex === -1) {
      newArr.push(value);
    } else {
      newArr.splice(currentIndex, 1);
    }

    return newArr
  }

  const filters = {
    "categories": categories,
    "tags": tags,
    "costs": costs,
    "types": types,
    "stages": stages
  }

  return (
    <Container maxWidth="xl" className={classes.directory}>
      <FilterMenu
        filtered={filters}
        handler={toggleFilter}
      />
      <DirectoryGrid
        filtered={filters}
      />
    </Container>
  );
}
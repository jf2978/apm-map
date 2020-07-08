import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  }
}));

export default function MentorsCard({ data }) {
  const classes = useStyles();
  const [raised, setRaised] = React.useState(false);
  const toggleRaised = () => {
    setRaised(!raised)
  }

  // fake placeholder loading state
  var loading = false

  return (
    <Card className={classes.root} onMouseOver={toggleRaised} onMouseOut={toggleRaised} raised={raised}>
      <CardActionArea className={classes.cardActionArea}>
        <CardHeader
          avatar={<Avatar src={data.image} className={classes.avatar}/>}
          title={data.name}
          titleTypographyProps={{
            variant: "h5",
            gutterBottom: true,
          }}
          subheader={data.description}
          subheaderTypographyProps={{
            variant: "subtitle1"
          }}
        />
      </CardActionArea>
    </Card>
  );
}

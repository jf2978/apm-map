import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  export default function DirectoryGrid() {
    const classes = useStyles();
    const data = useStaticQuery(graphql`
      query ResourcesQuery {
        allResourcesJson {
          edges {
            node {
              Name
              Link
              Type
              Tags
              Description
            }
          }
        }
      }
    `)

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {data.allResourcesJson.edges.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea href={card.node.Link}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title={card.node.Name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.node.Name}
                  </Typography>
                  <Typography>
                    {card.node.Description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
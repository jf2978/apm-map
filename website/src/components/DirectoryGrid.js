import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
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
    flexGrow: 1,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActionArea: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  }
}));

export default function DirectoryGrid() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query ResourcesQuery {
      allResourcesJson {
        edges {
          node {
            image
            description
            link
            name
            stage
            tags
            category
            cost
          }
        }
      }
    }
  `)

  return (
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid container spacing={4}>
        {data.allResourcesJson.edges.map((card, index) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            <Card className={classes.card}>
              <CardActionArea href={card.node.link}  className={classes.cardActionArea}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.node.image}
                  title={card.node.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.node.name}
                  </Typography>
                  <Typography>
                    {card.node.description}
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
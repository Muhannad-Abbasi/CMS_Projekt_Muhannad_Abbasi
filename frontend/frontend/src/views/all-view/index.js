import React from 'react';
import { Box, Typography, Container, makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import MoviesContent from '../movies/movies-content/Content';
import BooksContent from '../books/books-content/Content';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  style: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  booksBox:{
    display: 'block',
    width: '100%',
    color: '#00bcd4',
    marginBottom: 12
  },
  moviesBox:{
    display: 'block',
    width: '100%',
    color: '#ff005e',
    margin: '12px 0px'
  },
  title:{
    display: 'inline-block',
    padding: '0px 1rem'
  },
  line:{
    display: 'inline-block',
    width: '5rem',
  },
}));

const AllView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title={'Books & Movies'}
    >
      <Container className={classes.style}>
        <Box className={classes.booksBox}>
          <hr className={classes.line}/>
          <Typography gutterBottom variant="h5" component="div" className={classes.title}>
            Books
          </Typography>
          <hr className={classes.line}/>
        </Box>
        <BooksContent />
        <Box className={classes.moviesBox}>
          <hr className={classes.line}/>
          <Typography gutterBottom variant="h5" component="div" className={classes.title}>
            Movies
          </Typography>
          <hr className={classes.line}/>
        </Box>
        <MoviesContent />
      </Container>
    </Page>
  )
}

export default AllView;
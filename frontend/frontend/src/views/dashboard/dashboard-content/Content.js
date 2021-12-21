import React from 'react';
import { Box, Card, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import './index.css';

const useStyles = makeStyles((theme) => ({
  style: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '25rem',
    height: '25rem',
    margin: 6,
    position: 'relative',
    backgroundColor: 'whitesmoke'
  },
}));

const Content = () => {

  const classes = useStyles();

  return (
    <Card>
      <Box className={classes.style}>
        <RouterLink to="/books">
          <button className='book-button'>Books</button>
        </RouterLink>
        <RouterLink to="/movies">
          <button className='movie-button'>Movies</button>
        </RouterLink>
        <RouterLink to="/books-and-movies">
          <button className='book-movie-button'>Books &amp; Movies</button>
        </RouterLink>
      </Box>
    </Card>
  )
}

export default Content;
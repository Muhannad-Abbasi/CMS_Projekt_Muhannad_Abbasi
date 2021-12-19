import React from 'react';
import { Box, Card, Container, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Page from '../../components/Page';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  style: {
    width: '100%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0c0c0',
  }
}));

const DashboardView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title={'Moonlight International Library'}
    >
      <Container maxWidth={false}>
        <Card>
          <Box className={classes.style}>
            <RouterLink to="/books">
                <button className='book-button'>Books</button>
            </RouterLink>
            <RouterLink to="/movies">
                <button className='movie-button'>Movies</button>
            </RouterLink>
            <RouterLink to="/books">
                <button className='book-movie-button'>Books & Movies</button>
            </RouterLink>
          </Box>
        </Card>
      </Container>
    </Page>
  );
};

export default DashboardView;

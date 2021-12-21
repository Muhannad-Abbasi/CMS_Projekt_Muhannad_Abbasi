import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from '../../components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const AllView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title={'Books & Movies'}
    >
      <Container maxWidth={false}>
          
      </Container>
    </Page>
  )
}

export default AllView;
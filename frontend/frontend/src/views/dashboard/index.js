import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Content from './dashboard-content/Content';

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
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const DashboardView = () => {

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title={'Moonlight International Library'}
    >
      <Container className={classes.style}>
        <Content />
      </Container>
    </Page>
  );
};

export default DashboardView;

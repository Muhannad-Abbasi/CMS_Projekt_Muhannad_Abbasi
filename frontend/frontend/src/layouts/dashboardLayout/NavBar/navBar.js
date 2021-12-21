import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, makeStyles } from '@material-ui/core';
import logo from '../assets/logo.jpg';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 50
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: 'black',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.35)'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <RouterLink to="/">
            <img src={logo} alt="m-logo" className={classes.logo} />
          </RouterLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

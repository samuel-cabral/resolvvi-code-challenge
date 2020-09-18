import React from 'react';
import { makeStyles, Theme, CssBaseline } from '@material-ui/core';
import Header from '../../components/Header';
import ProfileData from '../../components/ProfileData';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.light,
    height: '100vh',
  },
}));

const Profile: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <ProfileData />
      {/* <Footer /> */}
    </div>
  );
};

export default Profile;

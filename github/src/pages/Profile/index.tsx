import React from 'react';
import {
  makeStyles,
  Theme,
  CssBaseline,
  Typography,
  Toolbar,
  List,
  Divider,
} from '@material-ui/core';

import Header from '../../components/Header';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import { Container, Main, LeftSide, RightSide } from './styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.light,
    height: '100vh',
  },
}));

const Profile: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <CssBaseline />
      <Header />
      <Main>
        <LeftSide>
          <ProfileData
            username="samuel-cabral"
            name="Samuel Cabral"
            avatarUrl="https://avatars1.githubusercontent.com/u/23100510"
            followers={234}
            following={23}
            company="Tribunal"
            location="Brazil"
            email="samuelcabral.mail@gmail.com"
            blog="linkedin.com/in/samuel-cabral"
          />
        </LeftSide>

        <RightSide>
          <Toolbar>Repositories</Toolbar>
          <Divider />
          <Typography
            variant="subtitle1"
            color="textPrimary"
            style={{ fontWeight: 400 }}
          />
          <List>
            <Divider />
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <RepoCard
                key={n}
                username="samuel-cabral"
                reponame="nome-do-repositorio"
                description="Um descrição bem legal para este repositorio"
                language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                stars={8}
                forks={4}
              />
            ))}
            <Divider />
          </List>
        </RightSide>
      </Main>
      {/* <Footer /> */}
    </Container>
  );
};

export default Profile;

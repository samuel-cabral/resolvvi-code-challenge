import React from 'react';
import { Container } from '@material-ui/core';
import { useStyles, Main, LeftSide, RightSide } from './styles';
import Card from '../Card';

const ProfileData: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Main className={classes.mainContainer}>
          <LeftSide>{Card}</LeftSide>

          <RightSide>conteudo</RightSide>
        </Main>
      </Container>
    </div>
  );
};
export default ProfileData;

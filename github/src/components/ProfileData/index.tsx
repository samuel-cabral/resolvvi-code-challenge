import React from 'react';
import { Container } from '@material-ui/core';
import { styled, makeStyles, Theme } from '@material-ui/core/styles';

import Card from '../Card';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: '64px',
  },
  mainContainer: {
    display: 'flex',
  },
}));
const Main = styled(Container)({
  padding: 0,
  paddingTop: '3.2%',
});
const LeftSide = styled(Container)({
  padding: 0,
  maxWidth: '20%',
});
const RightSide = styled(Container)({
  padding: 0,
});

const ProfileData: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Main className={classes.mainContainer}>
          <LeftSide>
            <Card />
          </LeftSide>

          <RightSide>conteudo</RightSide>
        </Main>
      </Container>
    </div>
  );
};
export default ProfileData;

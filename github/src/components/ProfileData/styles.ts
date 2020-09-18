import React from 'react';
import { Container } from '@material-ui/core';
import { styled, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '64px',
  },
  mainContainer: {
    display: 'flex',
  },
}));
export const Main = styled(Container)({
  padding: 0,
  paddingTop: '3.2%',
});
export const LeftSide = styled(Container)({
  padding: 0,
  maxWidth: '25%',
});
export const RightSide = styled(Container)({
  padding: 0,
  maxWidth: '75%',
});

import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import { Container, Box, Theme } from '@material-ui/core';

const MyContainer = styled(Container)({
  padding: 0,
  maxWidth: 325,
});
export default MyContainer;

export const Flex = styled(Box)({});
export const useFlexStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: 275,
  },
  h1: {
    paddingTop: 20,
    fontSize: '26px',
    lineHeight: 0.15,
    color: theme.palette.primary.main,
  },
  h2: {
    fontSize: '20px',
    fontWeight: 'normal',
    color: theme.palette.text.secondary,
  },
}));

export const useAvatarStyles = makeStyles(() => ({
  root: {
    width: 256,
    height: 256,
  },
}));

export const Row = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
});
export const useRowStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: 0,
    marginRight: 0,
  },
  li: {
    display: 'flex',
    alignItems: 'center',
  },
  span: {
    fontSize: '14px',
    color: theme.palette.text.secondary,
  },
  b: {
    marginLeft: '5px',
    marginRight: '5px',
    fontSize: '14px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
}));

export const Column = styled(Box)({});
export const useColumnStyles = makeStyles(() => ({
  root: {},
  li: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
  },
  '& li + li': {
    marginTop: '10px',
  },
  span: {
    marginLeft: '5px',
    overflow: 'hidden',
    textOverflow: 'ellips',
    whiteSpace: 'nowrap',
  },
}));

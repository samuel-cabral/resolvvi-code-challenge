import { styled } from '@material-ui/core/styles';

export const Container = styled('div')({
  horizontalPadding: 16,
  verticalPadding: 24,
  padding: 'horizontalPadding verticalPadding',
  marginTop: '6.8%',
  display: 'flex',
  flexDirection: 'column',
});

export const Main = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 20px',
  maxWidth: '1280px',
});

export const LeftSide = styled('div')({
  margin: 0,
  width: '25%',
  display: 'flex',
});

export const RightSide = styled('div')({
  padding: '0 horizontalPadding',
});

export const Repos = styled('div')({
  h2: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  div: {
    marginTop: 8,
    display: 'grid',
    gridGap: 16,
    gridTemplateColumns: '1fr',
  },
});

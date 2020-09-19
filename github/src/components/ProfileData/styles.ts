import { styled, makeStyles } from '@material-ui/core/styles';
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri';

export const Container = styled('div')({});
export const Flex = styled('div')({
  marginTop: '10%',
  display: 'flex',
  alignItems: 'center',
  width: 300,
});
export const useFlexChildrenStyles = makeStyles({
  div: {
    marginLeft: 24,
  },
  h1: {
    margin: 0,
    padding: 0,
    fontSize: 26,
    lineHeight: 1,
    color: '#24292e',
    fontWeight: 600,
  },
  h2: {
    margin: 0,
    padding: 0,
    fontSize: 20,
    color: '#666',
    fontWeight: 300,
  },
});

export const Avatar = styled('img')({
  width: '16%',
  borderRadius: '50%',
});

export const Row = styled('ul')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: '20px 0',
  padding: 0,
});
export const useRowChildrenStyles = makeStyles({
  li: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 5,
  },
  span: {
    fontSize: 14,
    color: '#586069',
    marginLeft: 5,
    marginRight: 5,
  },
});

export const iconCSS = makeStyles({
  root: {
    width: 16,
    height: 16,
    fill: '#6a737d',
    flexShrink: 0,
    marginRight: 5,
  },
});

export const PeopleIcon = styled(RiGroupLine)({});

export const Column = styled('ul')({
  padding: 0,
});
export const useColumnChildrenStyles = makeStyles({
  li: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
  },
  'li + li': {
    marginTop: 10,
  },
  span: {
    marginLeft: 5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

export const CompanyIcon = styled(RiBuilding4Line)({});

export const LocationIcon = styled(RiMapPin2Line)({});

export const EmailIcon = styled(RiMailLine)({});

export const BlogIcon = styled(RiLinksLine)({});

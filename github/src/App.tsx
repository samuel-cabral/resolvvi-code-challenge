import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

const useStyles = makeStyles({
  root: {
    margin: 0,
    height: '100vh',
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#24292e',
      light: 'white',
    },
    success: {
      main: '#2ea44f',
    },
    text: {
      primary: '#1b1f23',
      secondary: '#586069',
    },
  },
});

export default App;

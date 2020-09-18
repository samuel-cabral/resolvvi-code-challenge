import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import Routes from './routes';

const useStyles = makeStyles({
  root: {
    background: 'red',
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
      light: '#f5f5f5',
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

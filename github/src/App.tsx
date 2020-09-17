import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#24292e',
    },
    secondary: {
      main: '#7159c1',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />

        <Profile />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

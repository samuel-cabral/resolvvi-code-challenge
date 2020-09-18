import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Profile} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;

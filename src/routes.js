import { Route, Switch } from 'react-router-dom';

import React from 'react';
import { LoginPage } from 'modules/Login';
import { ROUTER_PATHS } from 'constants/router';

export default function Routes() {
  return (
    <Switch>
      <Route path={ROUTER_PATHS.LOGIN} exact component={LoginPage} />
    </Switch>
  );
}

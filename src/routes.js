import { Route, Switch } from 'react-router-dom';

import React from 'react';
import { HomePage } from 'modules/Home';
import { ROUTER_PATHS } from 'constants/router';

export default function Routes() {
  return (
    <Switch>
      <Route path={ROUTER_PATHS.HOME} exact component={HomePage} />
    </Switch>
  );
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import ExistingSelectorPage from '../pages/DomainPage/ExistingSelectorPage/ExistingSelectorPage';
import SummaryPage from '../pages/DomainPage/SummaryPage/SummaryPage';
import SelectorPage from '../pages/SelectorPage/SelectorPage';
import NewSelectorPage from '../pages/DomainPage/GeneratedSelectors/GeneratedSelectors';
import Page404 from '../pages/404/404';

const Web = props => (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      {/* <Route exact path="/login" component={Login} /> */}
      <Route exact path="/domainPage/:id/existingSelectors" component={ExistingSelectorPage}/>
      <Route exact path="/domainPage/:id/summaryPage" component={SummaryPage}/>
      <Route exact path="/domainPage/:id/newSelectors" component={NewSelectorPage} />>
      <Route exact path="/domainPage/:id/existingSelectors/:cat/:selID" component={SelectorPage} />
      <Route component={Page404} />
    </Switch>
  );
  
  export default Web;
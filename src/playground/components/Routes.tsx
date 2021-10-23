import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from 'components/Sidebar';

import HomePage from 'pages/HomePage';
import HeadingsPage from 'pages/HeadingsPage';
import ButtonsPage from 'pages/ButtonsPage';

type Props = {};

const Routes: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <Router>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '400px 1fr',
          gridTemplateRows: '100%',
        }}
      >
        <div>
          <Sidebar />
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/headings" component={HeadingsPage} />
          <Route exact path="/buttons" component={ButtonsPage} />
          <Route exact path="/colors" component={() => <div>Colors</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;

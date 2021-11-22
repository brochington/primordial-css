import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from 'components/Sidebar';

import HomePage from 'pages/HomePage';
import HeadingsPage from 'pages/HeadingsPage';
import ButtonsPage from 'pages/ButtonsPage';
import ColorsPage from 'pages/ColorsPage';
import InputsPage from 'pages/InputsPage';

type Props = {};

const Routes: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <Router>
      <div
        className="h100"
        style={{
          display: 'grid',
          gridTemplateColumns: '17rem 1fr',
          gridTemplateRows: '100vh',
        }}
      >
        <div className="">
          <Sidebar />
        </div>
        <div className="os vh100 pb8">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/colors" component={ColorsPage} />
          <Route exact path="/headings" component={HeadingsPage} />
          <Route exact path="/buttons" component={ButtonsPage} />
          <Route exact path="/inputs" component={InputsPage} />
        </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Routes;

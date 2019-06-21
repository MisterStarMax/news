import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from '../header';
import NewsPage from '../news';
import ProfilePage from '../profile';
import LoginPage from '../login';

import './index.css';

const App = () => {
  return(
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <h1>Hello</h1>} />
          <Route exact path="/news" component={NewsPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route render={() => <h1>Hello this Page not found!</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

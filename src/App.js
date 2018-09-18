import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Basic from './page/Basic';
import Repeater from './page/Repeater';
import './App.less';

const Example = () => (
  <Router>
    <div>
      <ul>
        <h1>Examples entry:</h1>
        <li>
          <Link to="/">Basic</Link>
        </li>
        <li>
          <Link to="/repeater">Repeater</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Basic} />
      <Route path="/repeater" component={Repeater} />
    </div>
  </Router>
);

export default Example;

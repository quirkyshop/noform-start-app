import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Basic from './page/Basic';
import Repeater from './page/Repeater';
import FormConfig from './page/FormConfig';
import RepeaterConfig from './page/RepeaterConfig';
import NestedForm from './page/NestedForm';
import RepeaterAdvanced from './page/RepeaterAdvanced';
import RepeaterMaster from './page/RepeaterMaster';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './App.less';

moment.locale('zh-cn');

const Example = () => (
  <Router>
    <div>     
      <ul>
        <h1>Resources: </h1>         
        <div><a href="https://github.com/alibaba/noform">NoForm Github</a></div>
        <div><a href="https://alibaba.github.io/noform">NoForm Docs</a></div>
          <h3>Feel free to star us! <a className="github-button" href="https://github.com/alibaba/noform" data-icon="octicon-star" data-show-count="true" aria-label="Star alibaba/noform on GitHub">Star</a></h3>
      </ul>
      
      <ul>
        <h1>Examples Entry:</h1>                
        <li><Link to="/">Basic</Link></li>
        <li><Link to="/formConfig">Form(Configuartion)</Link></li>
        <li><Link to="/nestedForm">Form(Nested)</Link></li>
        <li><Link to="/repeater">Repeater</Link></li>
        <li><Link to="/repeaterConfig">Repeater(Configuartion)</Link></li>
        <li><Link to="/RepeaterAdvanced">Repeater(Advanced)</Link></li>
        <li><Link to="/RepeaterMaster">Repeater(Master)😈</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Basic} />
      <Route exact path="/formConfig" component={FormConfig} />
      <Route exact path="/nestedForm" component={NestedForm} />
      <Route path="/repeater" component={Repeater} />
      <Route path="/repeaterConfig" component={RepeaterConfig} />
      <Route path="/RepeaterAdvanced" component={RepeaterAdvanced} />
      <Route path="/RepeaterMaster" component={RepeaterMaster} />
    </div>
  </Router>
);

export default Example;

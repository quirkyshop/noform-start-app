import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Basic from './page/Basic';
import Repeater from './page/Repeater';
import FormConfig from './page/FormConfig';
import RepeaterConfig from './page/RepeaterConfig';
import NestedForm from './page/NestedForm';
import RepeaterAdvanced from './page/RepeaterAdvanced';
import RepeaterMaster from './page/RepeaterMaster';
import ListBasic from './page/ListBasic';
import ListCustom from './page/ListCustom';
import ListMultiple from './page/ListMultiple';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './App.less';

moment.locale('zh-cn');

const Example = () => (
  <Router>
    <div>           
      <ul style={{ display: 'inline-block', verticalAlign: 'top' }}>
        <h1>NoForm</h1>                
        <li><Link to="/">Basic</Link></li>
        <li><Link to="/formConfig">Form(Configuartion)</Link></li>
        <li><Link to="/nestedForm">Form(Nested)</Link></li>
        <li><Link to="/repeater">Repeater</Link></li>
        <li><Link to="/repeaterConfig">Repeater(Configuartion)</Link></li>
        <li><Link to="/RepeaterAdvanced">Repeater(Advanced)</Link></li>
        <li><Link to="/RepeaterMaster">Repeater(Master) <span role="img" aria-label="monster">😈</span></Link></li>
      </ul>

      <ul style={{ display: 'inline-block', verticalAlign: 'top' }}>
        <h1>NoList</h1>                
        <li><Link to="/nolistBasic">Basic</Link></li>
        <li><Link to="/nolistCustom">Custom Filter</Link></li>
        <li><Link to="/nolistMultiple">Multiple List <span role="img" aria-label="monster">😈</span></Link></li>
      </ul>

      <ul  style={{ display: 'inline-block', verticalAlign: 'top' }}>
        <h1>Resources </h1>         
        <div><a href="https://github.com/alibaba/nopage">NoPage Github</a></div>
        <div><a href="https://alibaba.github.io/nopage">NoForNoPagem Docs</a></div>
          <h3>Feel free to star <span role="img" aria-label="star">✨</span> us! <a className="github-button" href="https://github.com/alibaba/nopage" data-icon="octicon-star" data-show-count="true" aria-label="Star alibaba/nopage on GitHub">Star</a></h3>
      </ul>

      <hr />

      <Route exact path="/" component={Basic} />
      <Route exact path="/formConfig" component={FormConfig} />
      <Route exact path="/nestedForm" component={NestedForm} />
      <Route path="/repeater" component={Repeater} />
      <Route path="/repeaterConfig" component={RepeaterConfig} />
      <Route path="/RepeaterAdvanced" component={RepeaterAdvanced} />
      <Route path="/RepeaterMaster" component={RepeaterMaster} />

      <Route path="/nolistBasic" component={ListBasic} />
      <Route path="/nolistCustom" component={ListCustom} />
      <Route path="/nolistMultiple" component={ListMultiple} />
    </div>
  </Router>
);

export default Example;

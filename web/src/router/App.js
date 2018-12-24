import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.less';

import Header  from '../component/header/header';
import home from '../page/home/view';
import video from '../page/video/index';
import effect from '../page/effect/view';
import project from '../page/project/view';
import login from '../page/login/index';
import list from '../page/list/view';

class App extends Component {
  render() {
    return (
        // <div>
        //    <Header />
        //    这个是注意的内容
        //   </div>
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Switch>
            <Route exact path="/home" component={home} />
            <Route path="/video" component={video} />
            <Route path="/effect" component={effect} />
            <Route path="/project" component={project} />
            <Route path="/list" component={list} />
            <Route path="/login" component={login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

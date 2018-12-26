import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import Layout from "./component/layout/index";

import routers from './routers/router'


class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            {
              routers.map((item, index) => {
                if(item.exact){
                  return (
                    <Route
                      key={index}
                      path={item.path}
                      exact
                      component={item.component}
                    />
                  )
                }
                return (
                  <Route
                    key={index}
                    path={item.path}
                    render={(props) => {
                      return (
                        <item.component
                          {...props}
                        />
                      )
                    }}
                  />
                )
              })
            }
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;

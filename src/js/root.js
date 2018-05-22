import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import ComponentDetails from './components/details';
import {Router,Route,hashHistory} from 'react-router';


class Root extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
        <Route component={Index} path="/">
            <Route component={ComponentDetails} path="details"></Route>
        </Route>
        <Route component={ComponentList} path="list/:id"></Route>
      </Router>
    )

  }
}
export default Root;

ReactDOM.render(
  <Root/>,
  document.querySelector("#reactApp")
)
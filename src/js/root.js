import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';


class Root extends React.Component{
  render(){
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <PCIndex/>
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
          <MobileIndex/>
        </MediaQuery>
      </div>
    )
  }
}
export default Root;

ReactDOM.render(
  <Root/>,
  document.querySelector("#mainContainer")
)
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,browserHistory} from 'react-router';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';
import MobileIndex from './components/mobile_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';
import PCChannel from './components/pc_channel';
export default class Root extends React.Component {
	render() {
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<Router history={browserHistory}>
						<Route path="/studyReact" component={PCIndex}></Route>
						<Route path="/studyReact/details/:uniquekey" component={PCNewsDetails}></Route>
						<Route path="/studyReact/usercenter" component={PCUserCenter}></Route>
						<Route path="/studyReact/ch/:uniquekey" component={PCChannel}></Route>
					</Router>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<Router history={browserHistory}>
						<Route path="/studyReact" component={MobileIndex}></Route>
						<Route path="/studyReact/details/:uniquekey" component={MobileNewsDetails}></Route>
						<Route path="/studyReact/usercenter" component={MobileUserCenter}></Route>
					</Router>
				</MediaQuery>
			</div>
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));

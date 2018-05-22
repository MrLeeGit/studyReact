var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import BodyIndex from './components/bodyindex';
import ComponentFooter from './components/footer';

class Index extends React.Component{
  componentWillMount(){
    console.log("页面主体组件即将加载。。。。。。。。。。")
  }
  componentDidMount(){
    console.log("页面主体组件加载完毕。。。。。。。。。。")
  }
  render(){
    return (
      <div>
          <ComponentHeader/>
          <BodyIndex userid={642905561} username="Dan"/>
          {this.props.children}
          <ComponentFooter />
      </div>
    )
  }
}

export default Index

// ReactDOM.render(
//   <Index/>,
//   document.querySelector("#reactApp")
// )
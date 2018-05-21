import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';
import ReactMixin from 'react-mixin';
import minxinLog from './minxins';

const defaultProps = {
  username : 'Lee'
}

class BodyIndex extends React.Component{
  constructor(){
    super();
    this.state = {
      username : 'Dan',
      age : '28'
    }
  }
  changeUserInfo(age){
    this.setState({age : age});
    // var inputAgeDom = document.querySelector("#submitButton");
    // ReactDOM.findDOMNode(inputAgeDom).style.color = "red"

    minxinLog.log("主页面");
    this.refs.submitButton.style.color = 'red';
  }
  handleChildValueChange(event){
    this.setState({age : event.target.value});
  }
  render(){
    return (
      <main>
        <h2>页面主体</h2>
        <p>此站的站长为：{this.props.username}<br />{this.props.userid}</p>
        <p>年龄为：{this.state.age}</p>
        <input id="submitButton" ref="submitButton" type="button" value="更改年龄" onClick={this.changeUserInfo.bind(this,27)} />
        <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)} />
      </main>
    )
  }
}

BodyIndex.propTypes = {
	userid: React.PropTypes.number.isRequired
};
BodyIndex.defaultProps = defaultProps;

ReactMixin(BodyIndex.prototype,minxinLog)


export default BodyIndex;



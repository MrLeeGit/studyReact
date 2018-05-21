import React from 'react';
class bodyChild extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <input type="text" placeholder="子页面输出" onChange={this.props.handleChildValueChange} />
        <p>
          姓名:{this.props.username}<br/>
          qq号码：{this.props.userid}<br/>
          id值：{this.props.id}
        </p>
      </div>
    )
  }
}

export default bodyChild;



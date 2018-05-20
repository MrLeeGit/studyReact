import React from 'react';
class bodyIndex extends React.Component{
  constructor(){
    super();
    this.state = {
      username : 'Dan',
      age : '27'
    }
  }
  render(){
    setTimeout(()=>{
      this.setState({username : 'Lee' , age : '28'});
    },4000)
    return (
      <main>
        <h2>页面主体</h2>
        <p>此站的站长为：{this.state.username}<br />年龄为：{this.state.age}</p>
      </main>
    )
  }
}

export default bodyIndex;



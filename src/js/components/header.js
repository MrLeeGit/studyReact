import React from 'react';

class ComponentHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      miniHeader : false
    }
  };
  switchHeader(){
    this.setState({
      miniHeader : !this.state.miniHeader
    })
  };
  render(){
    const styleComponentHeader = {
      header : {
        backgroundColor: "#333333",
				color: "#FFFFFF",
				paddingTop: (this.state.miniHeader) ? '3px' : "15px",
				paddingBottom: (this.state.miniHeader) ? '3px' : "15px"
      }
    }
    return (
      <header>
        <h2 style={styleComponentHeader.header} className="miniFooter" onClick={this.switchHeader.bind(this)}>这个页面的头部</h2>
      </header>
    )
  }
}
export default ComponentHeader
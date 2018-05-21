
import React from 'react';
var footerCss  =  require("../../css/footer.css");


class ComponentFooter extends React.Component {
  render(){
    return (
      <footer class={footerCss.miniFooter}>
          <h2 >这是一个页面底部的区域</h2>
      </footer>
    )
  }
}


export default ComponentFooter;
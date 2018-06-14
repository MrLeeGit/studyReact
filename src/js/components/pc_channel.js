import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {
	Tabs,
  Row,
  Col
} from 'antd';
import PCProduct from './pc_products';
import {Link} from 'react-router';

const TabPane = Tabs.TabPane;


class PCChannel extends React.Component{
    constructor(){
      super();
      this.state = {
        news : ''
      }
    }
    componentWillReceiveProps(){
      this.setState({news: ''})
      this.componentWillMount();
    }
    componentWillMount(){
      var myFetchOptions = {
        method: 'GET'
      };
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.params.uniquekey + "&count=20", myFetchOptions)
      .then(response => response.json())
      .then(json => this.setState({news: json}));
    }
    render(){
      const {news} = this.state;
      const newsList = news.length 
      ? news.map((newsItem, index) => (
            <li key={index}>
                <div class="u-img">
                  <Link to={`details/${newsItem.uniquekey}`}>
                    <img src={newsItem.thumbnail_pic_s03} alt={newsItem.title} />
                  </Link>
                </div>
                <div class="txt">
                  <Link to={`details/${newsItem.uniquekey}`}>
                    <h3>{newsItem.title}</h3>
                    <div class="info">
                      <span class="author">{newsItem.author_name}</span>
                      <span class="datetime">{newsItem.date}</span>
                    </div>
                  </Link>
                </div>
            </li>
        ))
    : '没有任何新闻数据！';
        return(
          <div>
            <PCHeader></PCHeader>
            <Row>
              <Col span={2}></Col>
              <Col span={16} class="container">
                <div class="m-list3">
                  <ul class="f-cb">{newsList}</ul>
                </div>
              </Col>
              <Col span={4}>
                <Tabs class="tabs_product">
                  <TabPane tab="ReactNews 产品" key="1">
                    <PCProduct/>
                  </TabPane>
                </Tabs>  
              </Col>
              <Col span={2}></Col>
          </Row>
          <PCFooter></PCFooter>
        </div>
        );
    }
}

export default PCChannel
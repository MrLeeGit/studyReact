import React from 'react';
import ReactDOM from 'react-dom';
import {
    Menu,
    Icon,
    Tabs,
    Row,
    Col,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const ItemGroup = Menu.ItemGroup;

import {Router, Route, Link, browserHistory} from 'react-router'


class MobileHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current : 'top',
            modalVisible: false,
                action: 'login',
                hasLogined: false,
                userNickName: '',
                userid: 0
        }
    }

    setModalVisible(value){
        this.setState({modalVisible : value})
    }

    callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};

  handleClick(event){
    if(event.key == 'register'){
      this.setState({current : 'register'});
      this.setModalVisible(true)
    }else{
      this.setState({current : event.key});
    }
  }

    handleClick(event){
        if(event.key == 'register'){
          this.setState({current : 'register'});
          this.setModalVisible(true)
        }else{
          this.setState({current : event.key});
        }
      }

    handleSubmit(event){
        event.preventDefault();
        let myFetchOptions = {
        metch : 'GET'
        }
        var formData = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            + "&username="+formData.userName+"&password="+formData.password
            +"&r_userName=" + formData.r_userName + "&r_password="
            + formData.r_password + "&r_confirmPassword="
            + formData.r_confirmPassword, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({userNickName: json.NickUserName, userid: json.UserId});
                localStorage.userid= json.UserId;
                localStorage.userNickName = json.NickUserName;
            });
            if (this.state.action=="login") {
                this.setState({hasLogined:true});
            }
            message.success("请求成功！");
            this.setModalVisible(false);
    }
    
    login(){
        this.setModalVisible(true);
    }
    logout(){
        localStorage.userid= '';
        localStorage.userNickName = '';
        this.setState({hasLogined : false})
    }
  
    componentDidMount(){
      if(localStorage.userid != ''){
        this.setState({
          hasLogined : true,
          userNickName : localStorage.userNickName,
          userid : localStorage.userid
        })
      }
    }

    render(){
        let {getFieldProps} = this.props.form;
		const userShow = this.state.hasLogined ?
		<Icon type="inbox"  onClick={this.logout.bind(this)}/>
		:
		<Icon type="setting" onClick={this.login.bind(this)}/>

        return (
            <div id="mobileheader">
                <header>
                    <img src="./src/images/logo.png" alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText = "关闭">
                <Tabs type="card" onChange={this.callback.bind(this)}>
                    <TabPane tab="登录" key="1">
                        <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="账户">
                                <Input placeholder="请输入您的账号" {...getFieldProps('userName')}/>
                            </FormItem>
                            <FormItem label="密码">
                                <Input type="password" placeholder="请输入您的密码" {...getFieldProps('password')}/>
                            </FormItem>
                            <Button type="primary" htmlType="submit">登录</Button>
                        </Form>
                    </TabPane>
                    <TabPane tab="注册" key="2">
                        <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem label="账户">
                            <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
                        </FormItem>
                        <FormItem label="密码">
                            <Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
                        </FormItem>
                        <FormItem label="确认密码">
                            <Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')}/>
                        </FormItem>
                        <Button type="primary" htmlType="submit" >注册</Button>
                        </Form>
                    </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}

export default MobileHeader = Form.create({})(MobileHeader);

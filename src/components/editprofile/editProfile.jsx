import React, {Component} from 'react';
import Header from '../header/header'
import Sider from '../sider/sider';
import './editProfile.css';
import home from '../../Images/dash_home_bread_crumb.svg';
import { Button } from 'antd';
import { Input, Icon } from 'antd';


class MainPage extends Component {
    constructor(props){
        super(props);
        this.state={
            isEditing:true
        }
    }
    // onClickChange(){
    //     this.setState({isEditing:true})
    // }
    render() {
        if (this.state.isEditing===false) {
            return (
                <div className="app">
                    <Header/>
                    <div className="app-body">
                        <Sider/>
                        <div className="content">
                            <h1>Dashboard</h1>
                            <img src={home}/>
                            <h4>• Admin • My Profile</h4>
                            <div className="adminClass">
                                <h1 className="adminName">Mike Smith</h1>
                                <p>- [Super Admin]</p>
                                <Button onClick={this.onClickChange}>Edit</Button><br/>
                                <hr/>
                                <div className="adminInform">
                                    <p className="p1">First Name</p>
                                    <span className="span1">Mike</span>
                                    <p className="p2">Email Address</p>
                                    <span className="span2">mike.smith@gmail.com</span>
                                    <p className="p3">Last Name</p>
                                    <span className="span3">Smith</span>
                                    <p className="p4">Password</p>
                                    <span className="span4">*******</span>
                                    <p className="p5">Administration Level</p>
                                    <span className="span5">Super Admin</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else {
            return (
                <div className="app">
                    <Header/>
                    <div className="app-body">
                        <Sider/>
                        <div className="content">
                            <h1>Dashboard</h1>
                            <img src={home}/>
                            <h4>• Admin • My Profile</h4>
                            <div className="adminClass">
                                <h1 className="adminName">Mike Smith</h1>
                                <p>- [Super Admin]</p>
                                <Button onClick={this.onClickChange}>Save</Button><br/>
                                <hr/>
                                <div className="adminInform">
                                    <p className="p1">First Name</p>
                                    <span className="span1"><Input
                                        placeholder="username"
                                        //prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        className="inputName"
                                        //suffix={suffix}
                                        //value={userName}
                                        //onChange={this.onChangeUserName}
                                        /*ref={node => this.userNameInput = node}*//></span>
                                    <p className="p2">Email Address</p>
                                    <span className="span2">
                                        <Input placeholder="email" /></span>
                                    <p className="p3">Last Name</p>
                                    <span className="span3"><Input placeholder="last name" /></span>
                                    <p className="p4">Password</p>
                                    <span className="span4"><Input.Password placeholder="password" /></span>
                                    <p className="p5">Administration Level</p>
                                    <span className="span5">Super Admin</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
    }

}

export default MainPage;
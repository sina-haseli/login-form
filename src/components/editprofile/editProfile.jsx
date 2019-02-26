import React, {Component} from 'react';
import Header from '../header/header'
import Sider from '../sider/sider';
import './editProfile.css';
import home from '../../Images/dash_home_bread_crumb.svg';
import { Button } from 'antd';
import { Input } from 'antd';


class MainPage extends Component {
    constructor(props){
        super(props);
        this.state={
            isEditing:false,
            //for a week user data make in there but after that should move them in reduux
            firstName:'Mike',
            email:'mike.smith@gmail.com',
            lastName:'Smith',
            password:'*********',
            adminPermission:'Super Admin'
        };
        this.onClickChange=this.onClickChange.bind(this);
    }
    onClickChange(){
        this.setState({isEditing:!this.state.isEditing})
    }
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
                                <h1 className="adminName">{this.state.firstName} {this.state.lastName}</h1>
                                <p>- [Super Admin]</p>
                                <Button onClick={this.onClickChange}>Edit</Button><br/>
                                <hr/>
                                <div className="adminInform">
                                    <p className="p1">First Name</p>
                                    <span className="span1">{this.state.firstName}</span>
                                    <p className="p2">Email Address</p>
                                    <span className="span2">{this.state.email}</span>
                                    <p className="p3">Last Name</p>
                                    <span className="span3">{this.state.lastName}</span>
                                    <p className="p4">Password</p>
                                    <span className="span4">{this.state.password}</span>
                                    <p className="p5">Administration Level</p>
                                    <span className="span5">{this.state.adminPermission}</span>

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
                            <div className="adminClass1">
                                <h1 className="adminName">Mike Smith</h1>
                                <p>- [Super Admin]</p>
                                <Button /*onClick={this.onClickChange}*/>Save</Button><br/>
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
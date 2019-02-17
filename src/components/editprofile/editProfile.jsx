import React, {Component} from 'react';
import Header from '../header/header'
import Sider from '../sider/sider';
import './editProfile.css';
import home from '../../Images/dash_home_bread_crumb.svg';
import { Button } from 'antd';


class MainPage extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="app-body">
                    <Sider/>
                    <div className="content">
                        <h1>Dashboard</h1>
                        <img src={home} />
                        <h4>• Admin • My Profile</h4>
                            <div className="adminClass">
                                <h1 className="adminName">Mike Smith</h1>
                                <p>- [Super Admin]</p>
                                <Button>Edit</Button><br/>
                                <hr/>
                                <div className="adminInform">
                                    <p className="p1">First Name</p>
                                    <span className="span1">asd</span>
                                    <p className="p2">Email Address</p>
                                    <span className="span2">asd</span>
                                    <p className="p3">Last Name</p>
                                    <span className="span3">asd</span>
                                    <p className="p4">Password</p>
                                    <span className="span4">asd</span>
                                    <p className="p5">Administration Level</p>
                                    <span className="span5">asd</span>

                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
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
                        <h4>• Dashboard</h4>
                            <div className="adminClass">
                                <h1 className="adminName">Mike Smith</h1>
                                <p>- [Super Admin]</p>
                                <Button>edit</Button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
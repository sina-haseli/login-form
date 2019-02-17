import React, {Component} from 'react';
import Header from '../header/header'
import Sider from '../sider/sider';
import './editProfile.css';
import home from '../../Images/dash_home_bread_crumb.svg';


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
                        <ul>
                            <li className="li1">
                                <span>123</span><br/>
                                <hr/>
                                <br/>
                                <h3>Organization</h3></li>
                            <li className="li2">
                                <span>10</span><br/>
                                <hr/>
                                <br/>
                                <h3>Staff</h3></li>
                            <li className="li3">
                                <span>6</span><br/>
                                <hr/>
                                <br/>
                                <h3>Patients</h3></li>
                            <li className="li4">
                                <span>7</span><br/>
                                <hr/>
                                <br/>
                                <h3>Data Logs</h3></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
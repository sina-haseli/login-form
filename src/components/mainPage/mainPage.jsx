import React, {Component} from 'react';
import Header from '../header/header'
import Sider from '../sider/sider';
import './mainPage.css';
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
                                123<br/>
                                <hr/>
                                <br/>
                                <h3>Organization</h3></li>
                            <li className="li2">
                                10<br/>
                                <hr/>
                                <br/>
                                <h3>Staff</h3></li>
                            <li className="li3">
                                6<br/>
                                <hr/>
                                <br/>
                                <h3>Patients</h3></li>
                            <li className="li4">
                                7<br/>
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
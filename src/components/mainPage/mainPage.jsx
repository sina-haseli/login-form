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
                            <li className="li1">Organization</li>
                            <li className="li2">Staff</li>
                            <li className="li3">Patients</li>
                            <li className="li4">Data Logs</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
import React, {Component} from 'react';
import Header from '../header/header'
import Sider from '../sider/sider';


class MainPage extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="app-body">
                    <Sider/>
                    <div className="content">

                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
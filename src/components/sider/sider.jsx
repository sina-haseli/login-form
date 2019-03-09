import React, {Component} from 'react';
import dashboard from '../../Images/dash.svg';
import book from '../../Images/room_booking.svg';
import star from '../../Images/events.svg';
import user from '../../Images/user.svg';
import setting from '../../Images/settings.svg';
import './sider.css';

class Sider extends Component {
    render() {
        return (
            <div className="container">
                <ul className="sideNav">
                    <li className="active1"><div className="link"><a href="../mainPage/mainPage.jsx"><img src={dashboard} className="img"/><p>Dashboard</p><span className="icon"> <i
                        className="fas fa-angle-right"></i></span></a></div></li>
                    <li className="active1"><div className="link"><a href="../organisations/organisations.js"><img src={book}/><p>Organisations</p></a><span className="icon"> <i
                        className="fas fa-angle-right"></i></span></div></li>
                    <li className="active1"><div className="link"><a href="#"><img src={star}/><p>Staff</p></a><span className="icon"> <i
                        className="fas fa-angle-right"></i></span></div></li>
                    <li className="active1"><div className="link"><a href="#"><img src={user}/><p>Patients</p></a><span className="icon"> <i
                        className="fas fa-angle-right"></i></span></div></li>
                    <li className="active1"><div className="link"><a href="#"><img src={setting}/><p>Settings</p></a><span className="icon"> <i
                        className="fas fa-angle-right"></i></span></div></li>

                </ul>
            </div>
        );
    }
}

export default Sider;
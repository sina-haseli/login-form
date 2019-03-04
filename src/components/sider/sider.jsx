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
                   <div className="list">
                    <li className="active1"><a href="../mainPage/mainPage.jsx"><img src={dashboard}/><p>Dashboard</p></a><span className="icon0"> <i
                        className="fas fa-angle-right"></i></span></li>
                    <li className="active1"><a href="../organisations/organisations.js"><img src={book}/><p>Organisations</p></a><span className="icon1"> <i
                        className="fas fa-angle-right"></i></span></li>
                    <li className="active1"><a href="#"><img src={star}/><p>Staff</p></a><span className="icon2"> <i
                        className="fas fa-angle-right"></i></span></li>
                    <li className="active1"><a href="#"><img src={user}/><p>Patients</p></a><span className="icon3"> <i
                        className="fas fa-angle-right"></i></span></li>
                    <li className="active1"><a href="#"><img src={setting}/><p>Settings</p></a><span className="icon4"> <i
                        className="fas fa-angle-right"></i></span></li>
                   </div>
                </ul>
            </div>
        );
    }
}

export default Sider;
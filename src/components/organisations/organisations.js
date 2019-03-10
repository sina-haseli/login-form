import React, { Component } from "react";
import Header from "../header/header";
import Sider from "../sider/sider";
import home from "../../Images/dash_home_bread_crumb.svg";
import { Button } from "antd";
import "./organisations.css";
import { Table } from "antd";
//import reqwest from "reqwest";
import plus from "../../Images/button_plus.png";

const columns = [
  {
    title: "Dat Registered",
    dataIndex: "date",
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: "20%"
  },
  {
    title: "Organisation Name",
    dataIndex: "name",
    sorter: true,
    width: "20%"
  },
  {
    title: "Telephone",
    dataIndex: "telephone",
    sorter: true,
    width: "20%"
  },
  {
    title: "Town/City",
    dataIndex: "town",
    sorter: true,
    width: "20%"
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: true
  },
  {
    width: "35%"
  }
];

class Organisations extends Component {
  state = {
    data: [],
    pagination: {},
    loading: false
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 colHeader ">
            <Header />
          </div>
        </div>
        <div className="row row1">
          <div className="col-sm-1-5  colside">
            <Sider />
          </div>
          <div className="col-sm-10-5  no-gutters  colcontent">
            <h1>Dashboard</h1>
            <img src={home} />
            <h4>• Admin • My Profile</h4>
            <div className="jumbotron bg-white tablejumb">
              <Button className="button">
                Add Organization <img src={plus} />
              </Button>
              <hr className="my-3 bg-dark" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Organisations;

import React, { Component } from "react";
import Header from "../header/header";
import Sider from "../sider/sider";
import home from "../../Images/dash_home_bread_crumb.svg";
import { Button } from "antd";
import "./organisations.css";
import { Table } from "antd";
//import reqwest from "reqwest";

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
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3" />
          <div className="col-lg-9" />
        </div>
      </div>
    );
  }
}

export default Organisations;

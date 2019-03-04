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
      <div className="app">
        <Header />
        <div className="app-body">
          <Sider />
          <div className="content">
            <h1>Organisations</h1>
            <img src={home} />
            <h4>• Organisations</h4>
            <div className="adminClass">
              <h1 className="adminName" />
              <Button>Add Organisation</Button>
              <br />
              <hr />
              <Table
                columns={columns}
                //rowKey={record => record.login.uuid}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                //onChange={this.handleTableChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Organisations;

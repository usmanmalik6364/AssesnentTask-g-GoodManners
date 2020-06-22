import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.css";
import { API } from "aws-amplify";
import { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: null };
  }
  getUsers = async () => {
    try {
      const peopleData = await API.get("goodmannersapi", "/users");
      this.setState({ users: peopleData.people });
    } catch (err) {
      console.log("error fetching from Lambda API");
    }
  };

  render() {
    return <div></div>;
  }
}

export default Users;

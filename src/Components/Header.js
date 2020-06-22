import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";

import logo from "../Assets/logo.jpg";

function header() {
  const style = { width: "80px", height: "80px" };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="https://www.e-goodmanners.com.au/">
          e-GoodManners
        </Navbar.Brand>

        <Nav className="mr-auto">
          <img src={logo} alt="e-Good Manners Logo " style={style} />
          <Button
            style={{
              paddingLeft: "10px",
              marginLeft: "20px",
              height: "80px",
              width: "80px",
            }}
          >
            View Users
          </Button>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default header;

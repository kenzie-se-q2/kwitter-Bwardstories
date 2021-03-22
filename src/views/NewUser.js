import React, { useState } from "react";
import { createNewUser } from "../fetchRequests";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const NewUser = () => {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Form>
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="DisplayName"
              onChange={e => setDisplayName(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
              Username
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="inlineFormInputGroup"
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
              Username
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                id="inlineFormInputGroup"
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Link to="/">
              <Button
                type="submit"
                className="mb-2"
                onClick={() => createNewUser(username, displayName, password)}>
                Submit
              </Button>
            </Link>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default NewUser;

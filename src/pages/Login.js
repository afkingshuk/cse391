import React from "react";
import { Button, Form } from "semantic-ui-react";

function Login(props) {
  return (
    <div className="form-container">
      <Form noValidate>
        <h1>Login</h1>
        <Form.Input
          label="Username"
          placeholder="Username.."
          name="username"
          type="text"
        />
        <Form.Input
          label="Password"
          placeholder="Password.."
          name="password"
          type="password"
        />
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
      {
        <div className="ui error message">
          <ul className="list">{<li key="{value}">'value'</li>}</ul>
        </div>
      }
    </div>
  );
}

export default Login;

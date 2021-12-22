import React from "react";
import { Button, Form } from "semantic-ui-react";

function Register(props) {
  return (
    <div className="form-container">
      <Form noValidate>
        <h1>Register</h1>
        <Form.Input
          label="Username"
          placeholder="Username.."
          name="username"
          type="text"
        />
        <Form.Input
          label="Email"
          placeholder="Email.."
          name="email"
          type="email"
        />
        <Form.Input
          label="Password"
          placeholder="Password.."
          name="password"
          type="password"
        />
        <Form.Input
          label="Confirm Password"
          placeholder="Confirm Password.."
          name="confirmPassword"
          type="password"
        />
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
      {
        <div className="ui error message">
          <ul className="list">
            <li key="{value}">'value'</li>
          </ul>
        </div>
      }
    </div>
  );
}

export default Register;

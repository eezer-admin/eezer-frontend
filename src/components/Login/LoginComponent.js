import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const LoginComponent = (props) => (
  <div className="Login">
    <FormGroup controlId="username" bsSize="large">
      <ControlLabel>Username</ControlLabel>
      <FormControl
        autoFocus
        type="username"
        value={props.userValue}
        onChange={props.onUserChange}
      />
    </FormGroup>
    <FormGroup controlId="password" bsSize="large">
      <ControlLabel>Password</ControlLabel>
      <FormControl
        value={props.passValue}
        onChange={props.onPassChange}
        type="password"
      />
    </FormGroup>
    <Button
      block
      bsSize="large"
      disabled={false}
      type="submit"
      onClick={props.onSubmit}>
      Login
    </Button>
    <Button
      block
      bsSize="large"
      disabled={false}
      type="submit"
      onClick={props.onLogout}>
      Logout
    </Button>
  </div>
);

LoginComponent.propTypes = {
  userValue:  PropTypes.string,
  passValue:  PropTypes.string,
  onUserChange: PropTypes.func,
  onPassChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onLogout: PropTypes.func,
}

export default LoginComponent;

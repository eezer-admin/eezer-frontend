import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from './../../actions/actions'
import LoginComponent from './LoginComponent'
//import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  handleLoginSuccess = (err) => {
    if (err) {
      this.setState({ error: err });
    } else {
      const { history } = this.props;
      history.push('/transports');
    }
  }

  handleSubmit = () => {
    const { login } = this.props;

    // login user
    login(this.state.username, this.state.password, this.handleLoginSuccess);
    this.setState({ password: '' });
  }

  handleLogout = () => {
    localStorage.clear();
  }

  render() {
    return (
      <div>
      <LoginComponent
        userValue={this.state.username}
        passValue={this.state.password}
        onUserChange={(event) => this.setState({ username: event.target.value })}
        onPassChange={(event) => this.setState({ password: event.target.value })}
        onSubmit={this.handleSubmit}
        onLogout={this.handleLogout} />

      <p />
      <div className="bg-danger">{this.state.error}</div>
      </div>
    );
  }

}

const mapStateToProps = state => {

  return {
    logg: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user, pass, cb) => dispatch(loginUser(user, pass, cb))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user';
import Card from '../functional/card';

class Login extends Component {
  state = {
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  }

  componentDidMount() {
    const { history } = this.props;
    const { token } = localStorage;
    if (token) history.push('/welcome');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, emailError: '', passwordError: '' });
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    if (email.length === 0 && password.length === 0) {
      return this.setState({ emailError: 'Email is required', passwordError: 'Password is required' });
    }

    if (!email.includes('@')) {
      return this.setState({ emailError: 'Email is not valid' });
    }

    if (email.length === 0) {
      return this.setState({ emailError: 'Email is required' });
    }

    if (password.length === 0) {
      return this.setState({ passwordError: 'Password is required' });
    }

    const { login, history } = this.props;
    const { payload } = await login({ email, password });
    if (payload.status === 200) history.push('/welcome');
  }

  render() {
    const { emailError, passwordError } = this.state;
    return (
      <Card>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" onChange={this.handleChange} placeholder="Email" />
            <div className="error small">{emailError}</div>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" onChange={this.handleChange} placeholder="Password" />
            <div className="error small">{passwordError}</div>
          </FormGroup>
          <FormGroup className="mb-5">
            <Button block className="mt-4 p-2" onClick={this.handleLogin}>Sign in</Button>
          </FormGroup>
          <p className="lead small border p-2 text-center">
            Don't have an account?
            {' '}
            <Link to="/register" style={{ textDecoration: 'none' }}>Sign up</Link>
          </p>
        </Form>
      </Card>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(userLogin(user)),
});

const mapStateToProps = ({ user }) => ({
  userInfo: user.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
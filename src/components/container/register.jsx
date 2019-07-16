import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/user';
import Card from '../functional/card';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      passwordError: '',
    });
  }

  handleLogin = async () => {
    const { firstName, lastName, email, password } = this.state;
    if (email.length === 0 && password.length === 0 && firstName.length === 0 && lastName.length === 0) {
      return this.setState({
        firstNameError: 'First name is required',
        lastNameError: 'Last name is required',
        emailError: 'Email is required',
        passwordError: 'Password is required',
      });
    }

    if (firstName.length === 0) {
      return this.setState({ firstNameError: 'First name is required' });
    }
    if (lastName.length === 0) {
      return this.setState({ lastNameError: 'Last name is required' });
    }

    if (email.length === 0) {
      return this.setState({ emailError: 'Email is required' });
    }

    if (!email.includes('@')) {
      return this.setState({ emailError: 'Email is not valid' });
    }

    if (password.length === 0) {
      return this.setState({ passwordError: 'Password is required' });
    }

    const { createAccount, history } = this.props;
    const { payload } = await createAccount({firstName, lastName, email, password });
    if (payload.status === 201) history.push('/');
  }

  render() {
    const { firstNameError, lastNameError, emailError, passwordError } = this.state;
    return (
      <Card>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">First name</Label>
            <Input type="text" name="firstName" onChange={this.handleChange} placeholder="First name" required={true} />
            <div className="error small">{firstNameError}</div>
          </FormGroup>
          <FormGroup>
            <Label for="email">Last name</Label>
            <Input type="text" name="lastName" onChange={this.handleChange} placeholder="Last name" required={true} />
            <div className="error small">{lastNameError}</div>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" onChange={this.handleChange} placeholder="Email" required={true} />
            <div className="error small">{emailError}</div>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" onChange={this.handleChange} placeholder="Password" required={true} />
            <div className="error small">{passwordError}</div>
          </FormGroup>
          <FormGroup className="mb-5">
            <Button block className="mt-4 p-2" onClick={this.handleLogin}>Create account</Button>
          </FormGroup>
          <p className="lead small border p-2 text-center">
            Already have have an account?
            {' '}
            <Link to="/" style={{ textDecoration: 'none' }}>Login</Link>
          </p>
        </Form>
      </Card>
    );
  }
}

Register.propTypes = {
  createAccount: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createAccount: (user) => dispatch(registerUser(user)),
});

const mapStateToProps = ({ user }) => ({
  userInfo: user.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
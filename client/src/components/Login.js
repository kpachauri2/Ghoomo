// Login.js
import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        password: '',
      };
    
      handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleLoginSubmit = (e) => {
        e.preventDefault();
        // Implement login logic here
      };
    render() {
    return (
        <div>
        <h2>User Login</h2>
        <form onSubmit={this.handleLoginSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

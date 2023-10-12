// Registration.js
import React, { Component } from 'react';

class Registration extends Component {
    state = {
        username: '',
        email: '',
        password: '',
      };
    
      handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleRegistrationSubmit = (e) => {
        e.preventDefault();
        // Implement registration logic here
      };
    render() {
    return (
        <div>
        <h2>User Registration</h2>
        <form onSubmit={this.handleRegistrationSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;

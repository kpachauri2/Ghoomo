// UserProfile.js
import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    return (
      <div>
         <h2>User Profile</h2>
      {/* User profile UI */}
      <Link to="/registration">Go Back to Registration</Link>
    </div>
    );
  }
}

export default UserProfile;

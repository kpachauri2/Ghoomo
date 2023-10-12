const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/your-database-name';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');

// Passport configuration
passport.use(
    new LocalStrategy(
      {
        usernameField: 'email', // Customize this based on your registration form
      },
      async (email, password, done) => {
        // Implement user authentication logic here
        // Check if the user exists in the database and validate the password
      }
    )
  );
  
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'your-secret-key', // Replace with your secret key
      },
      async (jwtPayload, done) => {
        // Implement JWT token verification logic here
        // Check if the user exists in the database based on jwtPayload.sub (user ID)
      }
    )
  );
  
  // Initialize Passport
  app.use(passport.initialize());

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Middleware setup (body parser, CORS, etc.)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Add more middleware as needed

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

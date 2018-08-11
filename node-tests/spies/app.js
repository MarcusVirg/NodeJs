var db = require('./db')

module.exports.handleSignup = (email, password) => {
  // Check of email already exists
  db.saveUser({email, password})
  // Send the welcome email
}
module.exports = {
  auth: {
    login: require('./schemas/auth/login'),
    passwordRecovery: require('./schemas/auth/password_recovery')
  }
}
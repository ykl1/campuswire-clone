const isAuthenticated = (req, res, next) => {
  if (req.session.username === '' || req.session.username === undefined) {
    next(new Error('User has not been authenticated'))
  } else {
    next()
  }
}

module.exports = isAuthenticated

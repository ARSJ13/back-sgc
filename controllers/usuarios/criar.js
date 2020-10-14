const Users = require('../../models/users')

module.exports = app => {
  app.post('/usuarios/criar', (req, res) => {
    const user = req.body

    Users.criar(user, res)

  })
}
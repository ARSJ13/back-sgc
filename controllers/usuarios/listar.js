const Users = require('../../models/users')

module.exports = app => {
  app.get('/usuarios/listar', (req, res) => {
    
    Users.listar(res);
  })
}
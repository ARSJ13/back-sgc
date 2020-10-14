const connection = require('../db/connection')

class Users {
  criar(user, res){
    const sql = 'INSERT INTO users SET ?'
    
    connection.query(sql, user, (error, results) => {
      if (error) {
        res.status(400).json(error)
      } else {
        res.status(201).json(results)
      }
    })
  }
  listar(res){
    const sql = 'SELECT * FROM users'

    connection.query(sql, (error, results) => {
      if(error) {
        res.status(400).json(error)
      }else {
        res.status(201).json(results)
      }
    })
  }
}

module.exports = new Users;
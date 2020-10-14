const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'trento',
  port: 3306,
  user: 'avivaldo',
  password: '13222612@',
  database: 'dcc_dev'
})

module.exports = connection;
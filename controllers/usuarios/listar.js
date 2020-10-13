module.exports = app => {
  app.get('/usuarios/listar', (req, res) => {
    res.send('Usuários Listar')
    console.log(res)
  })
}
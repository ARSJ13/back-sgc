module.exports = app => {
  app.get('/usuarios/criar', (req, res) => {
    res.send('Usuarios Criar')
  })
  app.post('/usuarios/criar', (req, res) => {
    console.log(req.body)
    res.send('Criar POST')
  })
}
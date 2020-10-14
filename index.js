const customExpress = require('./config/customExpress')
const db = require('./db/connection')

db.connect((error) => {
  if(error){
    console.log('Error database:', error)
  }else{
    console.log('Database success connection!')
    
    const app = customExpress()

    app.listen(3000, () => {
      console.log('connection port 3000')
    })
  }
})

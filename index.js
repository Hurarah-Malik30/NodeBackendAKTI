const express = require('express')
const cors = require('cors')
const connectToMongoDb = require('./config/mongoDb')
const addUniversityController = require('./controllers/addUniversityController')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(cors())
const port = 5000
connectToMongoDb()


app.get('/', (req, res) => {
  res.json({
    success: true,
    message: "route called"
  })
})

// app.post('/add-uni-info',addUniversityController)
// router
app.use('/', router)

app.listen(port, () => {
  console.log(`malik`)
})
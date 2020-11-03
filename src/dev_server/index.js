require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.static('build'))
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const LunchList = require('./models/lunchList')
app.use(bodyParser.json())
app.use(cors())
morgan.token('body', function (req) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body - :req[content-length]'))

app.get('/lunchList', (request, response) => {
  LunchList.find({}).then(list => {
    response.json(list.map(list => list.toJSON()))
  })
})

app.delete('/lunchList/:id', (request,response) => {
  LunchList.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    // eslint-disable-next-line no-undef
    .catch(error => next(error))
})

app.post('/lunchList', (request,response) => {
  const body = request.body

  if(!body.person){
    return response.status(400).json({
      error: 'Person missing'
    })
  }

  if(!body.location){
    return response.status(400).json({
      error: 'Location missing'
    })
  }

  const lunchList = new LunchList({
    person: body.person,
    location: body.number,
    meals: body.meals
  })

  lunchList.save((error, savedPerson) => {
    if(error){
      return response.status(400).send({ error: error.message })
    }
    else{
      response.json(savedPerson.toJSON())
    }
  })
  // }
  // })

})
const errorHandler = (error, request, response, next) => {
  if(error.name ==='CastError' && error.kind === 'ObjectId'){
    return response.status(400).send({ error: 'malformatted id' })
  }
  next(error)
}
app.use(errorHandler)
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

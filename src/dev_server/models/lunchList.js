const uniqueValidator = require('mongoose-unique-validator')
const mongoose = require('mongoose')

// eslint-disable-next-line no-undef
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


const lunchListSchema = new mongoose.Schema({
  person: {
    type: String,
    minLength: 3,
  },
  location: {
    type: String,
    minlength: 3,
    unique: true
  },
  meals: {
    type: [String]
  }
})

lunchListSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
lunchListSchema.plugin(uniqueValidator)
module.exports = mongoose.model('LunchList', lunchListSchema)



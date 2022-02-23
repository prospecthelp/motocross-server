const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/motocross')

mongoose.connection.on('err', err => {
  console.log(err);
})

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
})

const riderSchema = new Schema({
  rider: {
    type: String,
    minLength: 2,
    maxLength: 17,
    unique: true,
    required: true
  },
  number: {
    type: Number,
    min: 1,
    max: 99,
    unique: true,
    required: true
  },
  country: {
    type: String,
    minLength: 2,
    maxLength: 17,
    required: true
  },
  mechanic: {
    type: String,
    minLength: 2,
    maxLength: 17,
    required: true
  }
})

const teamSchema = new Schema({
  team: {
    type: String,
    minLength: 2,
    maxLength: 17,
    unique: true,
    required: true
  },
  manager: {
    type: String,
    minLength: 2,
    maxLength: 17,
    unique: true,
    required: true
  },
  manufacturer: {
    type: String,
    minLength: 2,
    maxLength: 17,
    required: true
  },
  riders: [riderSchema]
})

const Rider = mongoose.model('Rider', riderSchema)
const Team = mongoose.model('Team', teamSchema)

module.exports = {Rider, Team}

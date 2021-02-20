const {Schema, model} = require('mongoose');

const UserSchema = Schema({
  name:{
    type:String,
    require: true
  },
  country:{
    type:String,
    require:true
  },
  species:{
    type:String,
    require:true
  },
  age:{
    type:Number,
    require:true
  },
  description:{
    type:String,
    require:true
  }
})

module.exports = model('User',UserSchema)
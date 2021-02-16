const {Schema, model} = require('mongoose');

const EventSchema = Schema({
    name:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true,
        unique:true
    },
    place:{
        type:String,
        require: true,
    },
    description:{
        type:String,
        require: true,
    },
    organizer:{
        type:String,
        require: true,
    },
});

module.exports = model('Event', EventSchema);
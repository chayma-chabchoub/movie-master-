const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    img :{ 
        type: String
    },
    createdAt:{
        type:Date,
        default: new Date(),
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    }
})

const Movie = mongoose.model('movie',movieSchema)
module.exports= Movie
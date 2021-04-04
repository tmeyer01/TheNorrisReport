const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JokeCommentSchema = new Schema({
    joke:{
        type:String, 
        minLength:1,
        required:true
    },
    comment:{
        type:String,
        required:true,
        minLength:1,
    },
    rating:{
        type:Number,
        min:10,
        max:10,
        required:true,
    },
    jokeCatagory:{
        type:String,
    },
    user:{
        type: Schema.Types.ObjectId, 
        ref: 'User' 
        
    }
    
});

const JokeComment = mongoose.model("JokeComment", JokeCommentSchema);

module.exports = JokeComment;
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String, 
        minLength:1,
        maxLength:30,
        require:true
    },
    email:{
        type:String, 
        require:true
        
    },
    comments: [{
        type: Schema.Types.ObjectId, 
        ref: 'JokeComment'
    }]
    
});

UserSchema.plugin(findOrCreate);

const UserComment = mongoose.model("User", UserSchema);

module.exports = UserComment;
const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    phone:{
        type:String,
        required: true
    },
    id:{
        type:String,
        default: () =>new  mongoose.Types.ObjectId().toString(),
        required:true
    },
    creation_date:{
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
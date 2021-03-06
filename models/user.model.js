const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    fullName : {
        type: String,
        required: true,
    },
    studentID : {
        type: String,
        required: true,
    },
    userID: {
        type : String,
        required : true
    },
    username: {
        type : String,
        required : true,
    },
    pwd: {
        type : String,
        required : true,
    },
    level: {
        type : String,
        required : true,
    }
});

module.exports = mongoose.model('User', userSchema);
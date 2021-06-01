const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({

    studentID:{
        type:String,
        required:true
    },
    companyID:{
        type:String,
        required:true
    },
    chatID:{
        type:String,
        required:true
    },
    msg:String
});

const chat = mongoose.model('chat', chatSchema);

module.exports = chat;

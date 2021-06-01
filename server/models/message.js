const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({

    chatID:String,
    msg:String
    
});

const message = mongoose.model('message', messageSchema);

module.exports = message;

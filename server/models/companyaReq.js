const mongoose = require('mongoose');

const companyreqSchema = new mongoose.Schema({

 name: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  massege:{
    type:String,
  }
  
});

const event = mongoose.model('companyReq',companyreqSchema);

module.exports = event;

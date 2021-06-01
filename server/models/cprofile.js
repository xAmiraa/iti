const mongoose = require('mongoose');

const cprofileSchema = new mongoose.Schema({
  ID: String,
  name:{
    type:String,
  },
  image:{
    type:String,
    default:" "
  },
  careerobjrctive:{
    type:String,
    
  },
  content:{
    type:String,
    
  },
 email:{
    type:String,
    
  },
  address:{
    type:String,
    
  },
  telephonenumber:{
    type:String,
    
  },
  datecreated:{
    type:String,
    
  },
  field:{
    type:String,
    
  },
  description:{
    type:String,
    
  },
  image:{
    type:String,
    default:'uploads'+'//'+'default.jpg'
  }
});

const cprofile = mongoose.model('cprofile', cprofileSchema);

module.exports = cprofile;

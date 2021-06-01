const mongoose = require('mongoose');

const sprofileSchema = new mongoose.Schema({
  ID: String,
  name:{
    type:String,
   
  }
  ,
  age:{
    type:String,
    
  },
  title:{
    type:String,
    
  },
  about:{
    type:String,
   
  },
  email:{
    type:String,
     
  },
  phone:{
    type:String,
    
  },
  rate:{
    type:Number,
    
  },
  englishLevel:{
    type:String,
    
  },
  workLink:{
    type:[],
    
  },
  availability:{
    type:String,
    
  },
  Bio:{
    type:String,
   
  },
  skills:{
    type:[],
    
  },
  experience:{
    type:[],
    
  },
  certifications:{
    type:[],
    
  },
  university:{
    type:String,
    
  },
  faculty:{
    type:String,
   
  },
  graduationYear:{
    type:String,
    
  },
 image:{
  type:String,
  default:'uploads'+'//'+'default.jpg'
},
location:{
  type:String,
  default:"location ?"
},
position:{
  type:String,
  default:"position ?"
},

});

const sprofile = mongoose.model('sprofile', sprofileSchema);

module.exports = sprofile;

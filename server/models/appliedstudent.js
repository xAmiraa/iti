const mongoose = require('mongoose');


const appliedstudentSchema = new mongoose.Schema({

    
   jobID:String,
   studentID:String
  
});

const appliedstudent = mongoose.model('appliedstudent', appliedstudentSchema);

module.exports = appliedstudent;

const mongoose = require('mongoose');

const SavedJobSchema = new mongoose.Schema({

 // jobs:[{type: mongoose.Schema.Types.ObjectId , ref: 'allJob' }],
  jobID:[String],
  studentID:String
  
});

const SavedJob = mongoose.model('SavedJob', SavedJobSchema);

module.exports = SavedJob;

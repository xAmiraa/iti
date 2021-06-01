const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  



//  Model 
const allJob=require('../models/allJob');
const AppliedStudent=require('../models/appliedstudent');
const SavedJob = require('../models/savedJob');

//
const checkAuth=require('../middlewares/check-auth');




// create new job
router.post("/add/:companyID",(req,res,next)=>{
    
  const newJob = new allJob({
    companyID:req.params.companyID,
    title:req.body.title,
    salary:req.body.salary,
    location:req.body.location,
    type:req.body.type,
    languages:req.body.languages,
    exper:req.body.exper,
    qual:req.body.qual,
    desc:req.body.desc,
    respons:req.body.respons,
    company:req.body.company,
    time:req.body.time

    });
    newJob.save()
    .then(result => {
      console.log(result);
      return res.status(201).json({
        message: "Job created"
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });

    });

});


// get all jobs
router.get("/",(req,res,next)=>{
    
  allJob.find()
  .exec()
  .then(doc=>{
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });

});


// get job details
router.get("/details/:_id",(req,res,next)=>{
    
  allJob.find({_id:req.params._id})
  .exec()
  .then(doc=>{
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });

});


// delete job (post) for company or Admin

router.delete("/delete/:_id",(req,res,next)=>{
    
  allJob.deleteOne({_id:req.params._id})
  .exec()
  .then(doc=>{

    AppliedStudent.deleteOne({jobID:req.params._id})
    .exec()
    .then(data=>{
      res.status(200).json({
        message:"Job Deleted"
      });
    })
    SavedJob.deleteOne({jobID:req.params._id})
    .exec()
    .then(data=>{
      console.log(data);
      
    })

  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });


  });





  
// get all jobs
router.get("/companyjobs/:ID",(req,res,next)=>{
    
  allJob.find({companyID:req.params.ID})
  .exec()
  .then(doc=>{
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });


});



// list job names
router.get("/names/:jobID",(req,res,next)=>{
    
  allJob.find({_id:req.params.jobID})
  .exec()
  .then(doc=>{
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });

});





module.exports = router;
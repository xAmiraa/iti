const express= require('express')
const router = express.Router()


//  Model 
const AppliedStudent=require('../models/appliedstudent');

const Students=require('../models/sprofile');


router.post("/apply/:studentID/:jobID",(req,res,next)=>{
 AppliedStudent.find({ jobID:req.params.jobID, studentID:req.params.studentID })
  .exec()
  .then(student => {
    if (student.length >= 1) {
      return res.status(409).json({
        message: 'user already aplied'
      });
    } else {
      const newApply = new AppliedStudent({
        studentID:req.params.studentID,
        jobID:req.params.jobID
       
        });
        newApply.save()
        .then(doc=>{
          res.status(200).json({
            message:"Applied"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
      
        });
    }

  });

});

// student jobs

router.get('/studentJobs/:studentID',(req,res,next)=>{

  AppliedStudent.find({studentID:req.params.studentID})
  .exec()
  .then(result=>{
      res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });

});


// company posts (jobs)
router.get('/companyJobs/:jobID',(req,res,next)=>{

  AppliedStudent.find({jobID:req.params.jobID})
  .exec()
  .then(result=>{
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });

});

// list name of student

router.get('/studentList/:studentID',(req,res,next)=>{
  Students.find({ID:req.params.studentID})
  .exec()
  .then(result=>{
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });

});

router.delete("/canceljob/:jobID",(req,res,next)=>{
    AppliedStudent.deleteOne({jobID:req.params.jobID})
    .exec()
  .then(result=>{
    res.status(200).json({
      message:"job Canceled"
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  });

});



module.exports = router;
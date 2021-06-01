const express= require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




//  Model 
const User = require('../models/user');
const Cprofile=require('../models/cprofile');

 const multer=require('multer');

const storage=multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads');

  },
  
  filename: function(req,file,cb){
    cb(null, Date.now() + file.originalname); 
  }

});

const fileFilter=(req,file,cb)=>{
  //accept file
  if (file.mimetype==='image/jpeg'|| file.mimetype==='image/png' || file.mimetype==='image/jpg')
  {
    cb(null,true);
  }
   //reject file
  else{
    cb(null,false);
  }
};

const upload=multer({
   storage:storage,
   limits:{fieldSize: 1024*1024*5},
   fileFilter:fileFilter
 

});


// list all
router.get("/list",(req,res,next)=>{
    Cprofile.find()
    .exec()
    .then
    (data => {
      console.log(data)
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
 });



router.get("/:userID",(req,res,next)=>{

    Cprofile.findOne({ID:req.params.userID})
            .then(data=>{
                res.status(200).json(data);
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json({
                    error:err
                });
                
            });
});

router.post('/edit/:userID',upload.single('image'),function(req,res,next){
    var item={
        name:req.body.name,
        telephonenumber:req.body.telephonenumber,
        careerobjrctive:req.body.careerobjrctive,
        content:req.body.content,
        email:req.body.email,
        address:req.body.address,
        datecreated:req.body.datecreated,
        field:req.body.field,
        description:req.body.description,
        image : req.file.path

    }
    Cprofile.findOneAndUpdate({ID:req.params.userID}, {$set:item}, {new: true})
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
        
    });
})






module.exports = router;
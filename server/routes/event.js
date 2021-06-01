const express= require('express')
const router = express.Router()
const multer = require('multer')
const storage=multer.diskStorage({
    destination: function(req,file,cb){
      cb(null,'./uploads');
      
    },
    filename: function(req,file,cb){
        //cb(null,new Date().toISOString()+file.originalname);
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
     

//Model
const Event = require('../models/event');

//Add Event
router.post("/addevent",upload.single('image'), function (req, res,next) {
    var new_event = new Event({
    title : req.body.title,
    date : req.body.date,
    details : req.body.details,
    place : req.body.place,
    image : req.file.path
    });
   
    new_event.save()
    .then(result => {
      console.log(result);
      return res.status(200).json({result})
    })
    .catch(err => {
      console.log(err);
      res.status(501).json({
        error: err
      });
    });

});

// List Events

router.get('/listevent',function(req,res){
    Event.find()
    .exec()
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
  
    });
  
  
  });
  

//Delete Event
router.delete('/deleteevent/:ID',function(req,resp){
    Event.deleteOne({_id:req.params.ID},function(err,data){
        if(!err){
            console.log(req.params.id)
            resp.json(data)
        }else{
            console.log(err)
            resp.json(err)
        }

    })
})

module.exports = router;
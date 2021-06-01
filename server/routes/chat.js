const express = require('express')
const router = express.Router()


//  Models 
const Chat = require('../models/chat');



// get chat by studentID
router.get('/chats/:studentID',(req,res,next)=>{

  studentID=req.params.studentID;
    Chat.find({studentID:studentID})
      .exec()
      .then(result => {
        console.log(result.length);
        
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


// get chat by Company
router.get('/chatc/:companyID',(req,res,next)=>{

  companyID=req.params.companyID;
    Chat.find({companyID:companyID})
      .exec()
      .then(result => {
        console.log(result.length);
        
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








//new chat 
router.post('/newChat/:companyID/:studentID',(req,res,next)=>{
  var newChat = new Chat({
      companyID:req.params.companyID,
      studentID:req.params.studentID,
      chatID:req.params.companyID+req.params.studentID,
      });
      newChat.save()
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

module.exports = router;

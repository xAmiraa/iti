const express = require('express')
const router = express.Router()


//  Models 
const Chat = require('../models/chat');
const Message=require('../models/message');


//  get all messages by chatID


router.get('/messages/:chatID/',(req,res,next)=>{

    chatID=req.params.chatID;
      Message.find({chatID:chatID})
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
router.post('/newMessage/:companyID/:studentID',(req,res,next)=>{

  var newMessage = new Message({
     msg:req.body.msg,
      chatID:req.params.companyID+req.params.studentID,
      });
      newMessage.save()
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

const express= require('express')
const router = express.Router()

const _Requist = require('../models/companyaReq');


router.post("/companyrequist", function (req, res,next) {
    var new_requist = new _Requist({
    name : req.body.name,
    email : req.body.email,
    massege : req.body.massege,
    
    });
   console.log(new_requist)
    new_requist.save()
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

router.get('/listcompanyrequist',function(req,res){
    _Requist.find()
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


  router.delete('/deletecompanyrequist/:id',function(req,resp){
    _Requist.deleteOne({_id:req.params.id},function(err,data){
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
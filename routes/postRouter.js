
const express=require('express')
const path=require('path');
const rootDir=require('../utils/hostPath');
const postRouter=express.Router();



postRouter.post("/post/contact",(req,res)=>{
  console.log(req.body);
  res.sendFile(path.join(rootDir,"views","contact-added.html"))
  })


  module.exports=postRouter;
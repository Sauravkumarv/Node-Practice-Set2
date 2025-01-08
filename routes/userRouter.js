const express=require('express')
const path=require('path');
const rootDir=require('../utils/hostPath');

const userRouter=express.Router();



userRouter.get("/user/contact", (req, res) => {
  res.sendFile(path.join(rootDir,"views","contact.html"))
})



module.exports=userRouter;
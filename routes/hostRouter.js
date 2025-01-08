const express=require('express')
const path=require('path');
const rootDir=require('../utils/hostPath');
const hostRouter=express.Router();



hostRouter.get("/", (req, res) => {
  
  res.sendFile(path.join(rootDir,"views","home.html"))
  });
  

hostRouter.get("/host/first", (req, res) => {
  
res.sendFile(path.join(rootDir,"views","first.html"))
});



hostRouter.get("/host/second", (req, res) => {
  res.sendFile(path.join(rootDir,"views","second.html"))
});


hostRouter.get("/host/third", (req, res) => {
  res.sendFile(path.join(rootDir,"views","third.html"))
  
});


module.exports=hostRouter;


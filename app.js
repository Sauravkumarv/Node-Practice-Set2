const express = require
("express");
const path=require("path");

const hostRouter=require('./routes/hostRouter')
const postRouter=require('./routes/postRouter')

const userRouter = require("./routes/userRouter");
const rootDir = require('./utils/hostPath');



const app = express();

app.use('/',(req,res,next)=>{
  console.log("server is running",req.url,req.method)
  next();
})

app.use(hostRouter);
app.use(userRouter);

app.use(express.urlencoded());

app.use(postRouter);


app.use((req,res)=>{
  res.status(404).sendFile(path.join(rootDir,"views","404.html"))
})



const port = 5006;
app.listen(port, () => {
  console.log(`your server has been connected to the http://localhost:${port}`);
});

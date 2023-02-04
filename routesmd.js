const express = require('express');
const app = express();

const reqMidderware = require('./midddelware')
app.use(reqMidderware);

app.get('',(req,res)=>{
  res.send("this is a home page")
})
app.get('/about',(req,rsp)=>{
  res.send("this is about page")
})
app.listen(5000);
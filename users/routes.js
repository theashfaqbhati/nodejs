const express = require('express');
const app = express();
require('../config')
const userSchema = require('./UserSchema')
const {isValidForm,validators} = require('../helper')
app.use(express.json());
// app.post('/singup',async(req,resp)=>{
//     let data = new userSchema(req.body)
//     let result = await data.save();
//     resp.send(result);
//     console.log("helloooo");
// });

app.post('/',async(req,res)=>{
    let {Email,password,number,name}= req.body
    let form  = {
        Email:validators.checkEmail("Email",Email),
        password:validators.checkPassword("password",password),
        number:validators.checkNumber("number",number),
        name:validators.checkRequire("name",name)

    }
    if(form.name==null &&form.password==null){
        if(form.Email==null && form.number==null){
            let data = new userSchema(req.body)
            let result = await data.save()
            res.send(result)
        }
    }else{
        res.send(form)
    }
    
    // res.send(result)
})


app.listen(5000);
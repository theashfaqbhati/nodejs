const express = require('express');
const app = express();
app.get('',(req,res)=>{
    // console.log("data sent by browser",req.query)
    res.send('<h1>welcome,this is about page</h1>');
})
app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="user name"/>
    <button>Click Me</button>
    `);
})
app.get('/help',(req,res)=>{
    res.send([
        {
            name:'ashfaq',
            email:'ashfaq@bhati.com'
        },
        {
            name:'afq',
            email:'afq@bhati.com'
        }
    ]);
})
app.listen(5000);

// console.log("hello");

// var x=10;
// var y=20;
// var z=30;
// console.log(x+y+z);

// var x='20';
// if(x==20)
// {
//     console.log("matched")
// }

// var x='20';
// for(i=0;i<=10;i++)
// {
//     console.log(i)
// }

// const app = require('./app')
// console.log(app.z())
// var x='20';

// console.log(arr[4]) 

// const arr=[1,2,3,4,5,6,7,3,8];
// let result=arr.filter((item)=>{
    // console.log(item)
    // return item===3
// })
// console.warn(result)

// const fs = require('fs');
// fs.writeFileSync("hello.txt","code step by step")
// console.log("->>>",__filename);
// const fs = require('fs').writeFileSync;
// fs("abc.txt","abc")

// const http = require('http');
// http.createServer((req,resp)=>{
// resp.write("<h1>hello this is ashfaq bhati</h1>");
// resp.end();
// }).listen(4500); 

// const colors=require('colors');
// console.log("hellooo".red);

// const http = require('http');
// const data = require('./data');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application\json'});
// resp.write(JSON.stringify(data));
// resp.end();
// }).listen(5000);

// const fs = require('fs');

// const input = process.argv;

// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input")
// }

//  const fs = require('fs');
//  const path = require('path');
//  const dirPath = path.join(__dirname,'files');
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/helloo"+i+".txt","this is a simple files");
// }

// fs.readdir(dirPath,(err,files)=>{
//     console.warn(files)
//    files.forEach((item)=>{
//      console.log(item)
//    })
// })

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/index.txt`;
// fs.writeFileSync(filePath,'this is a simple txt files');
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filePath,'and file name is index.txt',(err)=>{
//     if(!err) console.log("file is update")
// })
// fs.rename(filePath,`${dirPath}/indext.txt`,(err)=>{
//     if(!err) console.log("file name is update")
// })
// fs.unlinkSync(`${dirPath}/indext.txt`)

// console.log("start exe...")

// setTimeout(()=>{
//     console.log("logic exe...")
// },2000)

// console.log("complete exe...")

// let a=20;
// let b=0;

// let waitingData= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000);
// })

// waitingData.then((data)=>{
//     b=data;
//     console.log(a+b)
// })

// console.log("starting up")

// setTimeout(()=>{
//     console.log("2 second log")
// },2000);

// setTimeout(()=>{
//     console.log("0 second log")
// },0)

// console.log("finishing up")

// const express = require('express');
// const app = express();
// const path = require('path');
// const htmlPath = path.join(__dirname,'html')
// // console.log(htmlPath)
// // app.use(express.static(htmlPath));

// app.set('view engine','ejs');

// app.get('',(_,resp)=>{
//    resp.sendFile(`${htmlPath}/home.html`)
// })
// app.get('/profile',(_,resp)=>{
//    const user={
//       name:'ashfaq bhati',
//       email:'ashfaq@bhati',
//       city:'merta city',
//       country:'india'
//    }
//    resp.render('profile',{user});

// })

// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${htmlPath}/about.html`)
//  })
//  app.get('*',(_,resp)=>{
//     resp.sendFile(`${htmlPath}/about.html`)
//  })
// app.listen(5000);

// const express = require('express');
// require('./config');
// const phone= require('./phone');

// const app = express();
// app.use(express.json());
// app.post("/create",async(req,resp)=>{
//     let data = new phone(req.body);
//     let result =await data.save();
//      console.log(result)
//     resp.send(result);
// });

// app.get("/list",async(req,resp)=>{
//     let data = await phone.find();
//     resp.send(data);
// });

// app.delete("/delete/:_id",async(req,resp)=>{
//     console.log(req.params)
//     let data = await phone.deleteOne(req.params);
//     resp.send(data);
// });

// app.put("/update/:_id",async(req,resp)=>{
//     console.log(req.params)
//     let data = await phone.updateOne(
//         req.params,
//         {
//             $set:req.body
//         }
//     );
//     resp.send(data);
// });

// app.listen(5000);

// const express = require('express');
// require('./config');
// const phone= require('./phone');
// const app = express();

// app.use(express.json());

// app.get("/search/:key",async(req,resp)=>{
//     console.log(req.params.key)
//     let data = await phone.find(
//         {
//             "$or":[
//                 {"name":{$regex:req.params.key}}
//             ]
//         }
//     );
//     resp.send(data);
// });

// app.listen(5000);
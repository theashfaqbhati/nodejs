const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName ='admin';

let express=require('express'); 
let app=express();
app.get('',async(req,res)=>{
    await client.connect();
    console.log('connected successfully to server');
    const db=client.db(dbName);
    const collection =db.collection('phone');
    const finds = await collection.find({}).toArray();
    console.log("=====findResult=====>",finds)
     res.send(finds);
})
app.listen(5000);
const getData=async()=>{
    await client.connect();
    console.log('connected successfully to server');
    const db=client.db(dbName);
    const collection =db.collection('phone');
    const finds = await collection.find({}).toArray();
    console.log("=====findResult=====>",finds)
    return 'done.';
}
getData();
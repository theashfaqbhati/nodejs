const dbConnect = require('./mongodb');

const deleteData=async ()=>{
   let data = await dbConnect();
   let result = await data.deleteOne({name:"10 pro"})
   console.warn(result);
}

deleteData();
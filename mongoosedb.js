const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/admin';
mongoose.connect(url);

const studentSchema = new mongoose.Schema({
    name:String,
    class:String,
    address:String
})

const insertData =async ()=>{
    const student = mongoose.model('Students',studentSchema);
    let data = new student({
         name:"asfak",
         class:"nodejs",
         address:"merta"
    });
    const resultsss = await data.save();
    console.log("=======dsdfsf===>",resultsss);
}

insertData(); 

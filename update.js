const dbConnect= require('./mongodb');

const updateData= async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:'realme'},{
            $set:{name:'redmi'}
        }
    );
    console.warn(result)
}

updateData();

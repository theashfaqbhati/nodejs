const dbConnect= require('./mongodb');

const insert =async ()=>{
    const db=await dbConnect();
    const result = await db.insert(
        [
        {name:"realme",model:"2023",price:"10000"},
        {name:"redmi",model:"2023",price:"14000"}
        ]
        )
        console.log(result)
}

insert();
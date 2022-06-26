const dbConnect=require('./mongodb');

const insert=async()=>{
   const db= await dbConnect();
   const result = db.insertOne(
    {name:'sujail', branch:'cse',price :' 350'}
    )

}
insert()
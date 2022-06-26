const {MongoClient} = require('mongodb')
const url = "mongodb://localhost:27017"
const databaseName='code-with-shubham';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
   let db=  result.db(databaseName);
   return  db.collection('srivastva');
}
module.exports=dbConnect; 
// const shubh= require('./app')         *Its is use for take the input or any item from another file

const { append } = require("express/lib/response");


// ** Assigm some value and print 
// let a=10, b=20;
// console.log(a+b)

// *  Using loop print the value  of array
// const array=[10, 20,30,490];
// for(i=0;i<10;i++)
// {
//     console.log(array[3])
// }

// *By the help of another file  print the specific value 
// console.log(shubh.z())


// *By the help of array how can we filter the value and return the  conditional value 
// const array=[10, 20,30,490];
// let res=array.filter((item)=>{
//     console.log(item)
//     return item<490
// })
// console.log(res)

// *Core module 
// const fs=require('fs');
// fs.writeFileSync("heelo2.txt","code with shubham") * Generate a file  in txt file


// * Know the directory name 
// console.log("->",__dirname);
//  console.log("->>",__filename); * how to know file name 

// *Create a server
// const http =require('http');
//  http.createServer((req,resp)=>{
//      resp.write("<h1>Hello Shubham you can do this <\h1>")
//      resp.end();

//  }).listen(4600)

// *genrate a package by command npm Init

// then install npm i colors the we use this colours in console

// var colors = require('colors');
// console.log('code with shubham' .green)

// *Create a static Api 
// const data=require('./data')
// const http = require('http')
// http.createServer((req,resp)=>{

//     resp.writeHead(500,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();

// }).listen(2500)




// * how to get input from terminal; and create a data and delet a data


// const fs=require('fs')
//  const input =process.argv
//  if(input[2]=='add'){
//      fs.writeFileSync(input[3],input[4])

//  }else if( input[2]=='remove'){
//      fs.unlinkSync(input[3])

//  }
// else{
//     console.log("invalid input")
// }

//Move towards express js

// install express npm i express and make some html pages and link with node js as well as remove the url as per your choice


// const express = require('express')
// const app = express();
// const path = require('path');
// const { getMaxListeners } = require("process");


// const PublicPath = path.join(__dirname, 'public')
// console.log(PublicPath)

// app.get('', (req, resp) => {
//     // resp.send('hello,this is home page')
//     resp.sendFile(`${PublicPath}/index.html`)

// })
// app.get('/about', (req, resp) => {
//     // resp.send('welcome,this is About page')
//     resp.sendFile(`${PublicPath}/about.html`)


// })
// app.get('/help', (req, resp) => {
//     // resp.send('hello,this is help page')
//     resp.sendFile(`${PublicPath}/help.html`)

//     //  towards the ejs template engine



// })
// app.set('view engine', 'ejs');


// app.get('/profile', (_, resp) => {
//     const user={
//         name:"shubham ",
//         email: "shubhamsrivastva03@gmail.com",
//         city: "sasaram"
//     }
//     resp.render('profile',{user});



// })
// app.listen(5000);


// Towards to mongodb now we connect node js to mongodb 

// const {MongoClient} = require('mongodb')
// const url = "mongodb://localhost:27017"
// const client = new MongoClient(url);

// async function dbConnect(){
//     let result = await client.connect();
//    let db=  result.db('code-with-shubham');
//    return  db.collection('srivastva');
//    let response = await collection.find({}).toArray();
//    console.log(response);

//All in one below one line hhahahahah
      // const shubh = await (await client.connect()).db('code-with-shubham').collection('srivastva').find({name:'shubham'}).toArray();
      // console.log(shubh)

      // }
const dbConnect =require('./mongodb')

 const main=async()=>{
      let data=await dbConnect();
      data= await data.find().toArray()
      console.log(data);
 }

main();

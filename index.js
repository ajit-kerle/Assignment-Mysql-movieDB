const mysql=require('mysql')  // mysql for backend 
const express=require('express') // express for craeting http server request
const app=express()
const connection=require('./database') // database connection config 
const bodyParser = require('body-parser')// body parser for parsing incoming data from postman
app.use(bodyParser.json()) // creating body parser as global middle ware 

// GET /api/v1/longest-duration-movies
// get long duration movie api
app.get('/api/v1/longest-duration-movies',function(req,res){
    // sql query defination
    let sql='SELECT tconst,primaryTitle,runtimeMinutes,genres FROM movies'
    
    // query() inbuilt method in mysql node package
    connection.query(sql,function(err,movies){
        if(err) throw err;
         
         // sorting movie in desc order using sort method
        let sortMovie=movies.sort((a,b)=>{
            return b.runtimeMinutes-a.runtimeMinutes
        })
        
        
        // for loop for 10 long duration movie
        let n=10
        let resultMovie=[]
        for(let i=0;i<n;i++){
            resultMovie[i]=sortMovie[i]
        }
        // return top ten long duration movie
        res.send(resultMovie)
        
    })
})
//================================================================
//  GET /api/v1/top-rated-movies
//  his route returns as JSON the movies with an averageRating > 6.0, in sorted
// order by averageRating

app.get('/api/v1/top-rated-movies',function(req,res){
    // sql query defination
    // here we are using JOIN and WHERE Condition to extract avg rating grt than 6 
    let sql='SELECT movies.tconst,primaryTitle,genres,ratings.averageRating FROM movies JOIN ratings ON ratings.tconst=movies.tconst where (ratings.averageRating >6.0)'
    
    // query() inbuilt method in mysql node package
    connection.query(sql,function(err,movies){
        if(err) throw err;
         
         // return the response only
         res.send({data:movies})
    })
})

// ===================================================
// POST /api/v1/new-movie

app.post('/api/v1/new-movie',function(req,res){
    // destructuring data from req body
     let {tconst,titleType,primaryTitle,runtimeMinutes,genres}=req.body
    
    // query of inserting data into movies table
     let sql='INSERT INTO movies SET tconst = ?,titleType = ?,primaryTitle = ?,runtimeMinutes = ?,genres = ?'

      // query function 
     connection.query(sql,[tconst,titleType,primaryTitle,runtimeMinutes,genres],(err,data)=>{
     
        if(err){
            res.send({status:false,message:err.message})
        }
        // return success ful response 201 status code 
        res.status(201).send({status:true,message:'Success'})
     })
})


// port listening on 8000 
app.listen(8000,'localhost',()=>{
    console.log(`Application listening a port `)
    connection.connect(function(err){
       
       if(err) throw err
        console.log('Mysql Database is connected')
    })
    // console.log(`)
})




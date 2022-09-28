# Assignment-Mysql-movieDB
Backend coding assignment 


requirements or dependency
"body-parser": "^1.20.0",
    "express": "^4.18.1",
    "mysql": "^2.18.1"
       'nodemon' 

// please read this file 

To start application use this cammand
  : nodemon start

a) GET /api/v1/longest-duration-movies
This route returns as JSON the top 10 movies with the longest runTime
The output should contain tconst, primaryTitle, runtimeMinutes & genres

b) GET /api/v1/top-rated-movies
This route returns as JSON the movies with an averageRating > 6.0, in sorted
order by averageRating
The output should contain tconst, primaryTitle, genres & averageRating


c) POST /api/v1/new-movie
This route takes JSON as input for new movie and saves it into the database
On successful save, it returns “success”  

*****provide this type of data in postman to inserting in movies table 

{
    "tconst":"tt00000102",
    "titleType":"short",
    "primaryTitle":"Harry potter",
    "runtimeMinutes":200,
    "genres":"adventure"
    }



 // assignment completed 
 // author ajit kerle 

                THANKS FOR ASSIGNMENT

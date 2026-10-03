import express from 'express'
import pool from './db.js';
const app = express();

app.get('/products', (req, res) => {
    res.json('Hello Products')
})

app.get('/contacts', (req, res) => {
    res.json('contacts page')
})

app.get('/about', (req, res) => {
    res.json('about page')
})

pool.query("SELECT NOW()", (error, result) => {
    if(error){
        console.log("Database connection failed");
        console.log(error);
    } else{
         console.log("Database connection successful");
        console.log(result.rows);

    }
})



app.listen(5000, () => { 
    console.log('Server is running on port 5000');
});




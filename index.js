const bodyParser = require('body-parser');
const connection = require('./connection')
const express =require('express');

const app= express();
app.use(bodyParser.json());



// insert data
app.post('/tasklist', (req, res) => {
    const { userid, task_title, description, status } = req.body;
    const INSERT_TASK_QUERY = `INSERT INTO tasklist (userid, task_title, description, status) VALUES (?, ?, ?, ?)`;
  
    connection.query(INSERT_TASK_QUERY, [userid, task_title, description, status], (err, results)=> {
        
 if (err) {
    console.log("Error in Data Insertion");
    res.status(500).send("Error in Data Insertion");
    console.log(err);
 }
 else
 {
    console.log("Data entry successful!!!");
    res.status(200).send('Data entry successful!!!');
    console.log(req.body);
 }



}) ;
  





})









app.listen(3000,()=>
{
   
 console.log('Server started at port 3000');


})
const express = require('express');
const bodyParse = require('body-parser');
const knex = require('knex');
const cors = require('cors');
const morgan = require('morgan');

//Import Routes 
const p = require('./routes/posts')
const g = require('./routes/gets')
const updateData = require('./routes/update')
const deleteData = require('./routes/delete') 


const db = knex({
    client:'pg',
    connection: process.env.POSTGRES_URI
});

const app = express();
app.use(bodyParse.json());
app.use(morgan('combined'));
app.use(cors());

//Import Routes

//Registering users
app.post('/register',(req,res)=> {
    p.postUsers(req,res,db);
});

//Displaying all data
app.get('/users',(req,res)=>{
    g.getData(req,res,db);
})

//Inserting images data
app.post('/images', (req, res)=> {
    p.postImages(req,res,db);
})

//Inserting comments
app.post('/comments', (req,res) => {
    p.postComments(req,res,db);
})

//Geting users comments
app.get('/users_comments',(req,res) => {
    g.getCommentsData(req,res,db);
})

//Geting one user comment
app.get('/users_comments/:user_id',(req, res) => {
    g.getAcomment(req,res,db);
})

//Updating data
app.put('/update_comments/:user_id',(req,res) => {
    updateData.updateComments(req,res,db);
})

//Deleting a commment
app.delete('/delete_comments/:user_id', (req,res)=> {
    deleteData.deleteUserComments(req,res,db);
})

//Displaying all the pictures
app.get('/Allimages',(req,res)=>{
    g.getAllImages(req,res,db);
})


app.get('/',(req, res)=>{res.send("This is the home screen!!")});


// app.post('/comments',(req, res)=>{
//     console.log(req.body.comments,req.body.id)
//     db.where({id:req.body.id}).insert({comments:req.body.comments}).into('comments')
//     .then(data => {
//         res.status(200).send(data);
//     })
// })


// app.post('/comments',(req, res)=>{
//     console.log(req.body.comments,req.body.id)
//     db.where({id:req.body.id}).update({comments:req.body.comments}).into('images')
//     .then(data => {
//         res.send(data);
//     })
// })
// Plase this ip when dev locally'192.168.1.69'
app.listen(3001,()=>{
    console.log('--> App is running at port 3001');
})


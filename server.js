const express = require("express");
const bodyParse = require("body-parser");
const knex = require("knex");
const cors = require("cors");
const morgan = require("morgan");

//Import Routes
const register = require("./routes/register/register");
const _signin = require("./routes/signin/signin");

const p = require("./routes/posts");
const g = require("./routes/gets");
const updateData = require("./routes/update");
const deleteData = require("./routes/delete");

const db = knex({
  client: "pg",
  connection: process.env.POSTGRES_URI,
});
// const db = knex({
//   client: 'pg',
//   version: '10',
//   connection: {
//     host : 'localhost',
//     port : 5432,
//     user : 'red',
//     password : '',
//     database : 'img'
//   }
// });



const app = express();
// app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use(morgan("combined"));
app.use(cors());

//Import Routes

//Registering users
app.post("/register", (req, res) => {
  p.postUsers(req, res, db);
});

//Displaying all data
app.get("/users", (req, res) => {
  g.getData(req, res, db);
});

//Inserting images data
app.post("/images", (req, res) => {
  p.postImages(req, res, db);
});

//Inserting comments
app.post("/comments", (req, res) => {
  p.postComments(req, res, db);
});

//Geting users comments
app.get("/users_comments", (req, res) => {
  g.getCommentsData(req, res, db);
});

//Geting one user comment
app.get("/users_comments/:user_id", (req, res) => {
  g.getAcomment(req, res, db);
});

//Updating data
app.put("/update_comments/:user_id", (req, res) => {
  updateData.updateComments(req, res, db);
});

//Deleting a commment
app.delete("/delete_comments/:user_id", (req, res) => {
  deleteData.deleteUserComments(req, res, db);
});

//Displaying all the pictures
app.get("/Allimages", (req, res) => {
  g.getAllImages(req, res, db);
});
// -- register user
app.post("/new/register", (req, res) => {
  register.registerUser(req, res, db);
});

// -- signin
app.post("/signin", (req, res) => {
  _signin.userSignin(req, res, db);
});

// Displaying the last three comments.
app.get("/last/user/comments", (req, res) => {
  g.getLastComments(req, res, db);
});

// User repley
app.post("/user/repley", (req, res) => {
  p.postRepley(req, res, db);
});

app.get("/repley", (req, res) => {
  g.getRepley(req, res, db);
});

app.get("/repley/:user_id", (req, res) => {
  g.getRepleyByUid(req, res, db);
});
app.get("/", (req, res) => {
  res.send("This is the home screen!!");
});

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
app.listen(3001, () => {
  console.log("http://172.17.0.1:3001/");
  console.log("--> App is running at port 3001");
});

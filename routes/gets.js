// Getting all users data
const getData = async (req, res, db) => {
  try {
    const data = await db.select("*").from("users");
    // .then(data => {
    res.status(200).send(data);
    // })
  } catch (err) {
    console.error(err.message);
  }
};

//Getting users comments
const getCommentsData = async (req, res, db) => {
  try {
    const commentsData = await db.select("*").from("comments");
    res.status(200).send(commentsData);
  } catch (err) {
    console.error(err.message);
  }
};

// Geting a spesific comment
const getAcomment = async (req, res, db) => {
  const { user_id } = req.params;
  try {
    const acommentData = await db
      .select("*")
      .from("comments")
      .where({ user_id });
    console.log(acommentData);
    res.status(200).send(acommentData);
  } catch (err) {
    console.error(err.message);
  }
};

// get the last three user comments.
const getLastComments = async (req, res, db) => {
  try {
    const lastComments = await db
      .select("image_id","users_comments")
      .from("comments")
      .orderBy("users_comments", "desc")
      .limit(3);
    res.status(200).send(lastComments);
  } catch (error) {
    console.error(error.message);
  }
};

const getAllImages = async (req, res, db) => {
  try {
    const allImages = await db.select("*").from("images");
    res.status(200).send(allImages);
  } catch (err) {
    console.error(err.message);
  }
};

// Get test
// app.get('/comentario',(req, res)=>{
//     db.select('*').from('comment_test').orderBy('user_id','asc')
//     .then(data => {
//         res.send(data)
//         console.log(data)
//     })
// });
module.exports = {
  getData,
  getCommentsData,
  getAcomment,
  getAllImages,
  getLastComments,
};

// Register users
const postUsers = async (req, res, db) => {
    try {
        console.log(req.body.name, req.body.email)

        const { name, email } = req.body;
        const data = await db.insert({ 
            name: name, 
            email: email 
        }).into('users')
        // console.log(data);
        res.status(200).send("User Register!!");
    }
    catch (err) {
        console.error(err.message);
    }
}

//Inserting images path
const postImages = async (req, res, db) => {
    try {
        const { user_id, path_images } = req.body;
        console.log(user_id, path_images);
        const imagesData = await db.insert({
            user_id: user_id,
            path_images: path_images
        }).into('images')

        // console.log(imagesData);
        res.status(200).send("Data Inserted");
    }
    catch (err) {
        console.error(err.message);

    }
}

//Inserting comments
const postComments = async (req, res, db) => {

    try {
        const {user_id, image_id,users_comments} = req.body;
        console.log(user_id, image_id, users_comments)

        const commentsData = await db.insert({ 
            user_id: user_id,
            image_id: image_id, 
            users_comments: users_comments 
        }).into('comments')
            // console.log(commentsData);
            res.status(200).send("Data inserted"); // if want to send data users_comments  

    } catch (err) {
        console.error(err.message);

    }
}

module.exports = { 
    postUsers, 
    postImages, 
    postComments 
};
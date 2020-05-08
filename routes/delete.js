const deleteUserComments = async(req,res, db) => {
    try {
        const {user_id} = req.params;
        const deleteComments = await db('comments').where({user_id}).del()
        res.status(200).send("Data deleted")
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = {
    deleteUserComments
}
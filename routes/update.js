// Update comments 

const updateComments = async (req,res,db) =>{

    try {
        const {user_id} =  req.params;
        const {users_comments} = req.body;
        const updateComments =  await db('comments').update({users_comments}).where({user_id})
        res.json("updated data")

    } catch (err) {
        console.error(err.message)
    }
}
module.exports = {updateComments}
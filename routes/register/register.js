const registerUser = async (req, res, db) => {
  try {
    const { name, password, email } = req.body;
    await db.transaction(async (trx) => {
      const user_id = await trx("register").insert(
        {
          name: name,
          email: email,
        },
        "user_id"
      );
      const id = user_id.toString(); // change datatype in db user_id in register, signin
      await trx("signin").insert({
        user_id: id,
        email: email,
        password: password,
      });

      // console.log(inserts);
      // console.log("new user");
      res.status(200).json({ NEW_USER: true });

    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  registerUser,
};

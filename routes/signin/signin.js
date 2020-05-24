const userSignin = async (req, res, db) => {
  try {
    const { email, password } = req.body;
    const r = await db
      .select("email", "password")
      .from("signin")
      .where({ email: email })
      .then((data) => {
        if (email === "" && password === "") {
          res.status(400).json({ EMPTY: true });
        } else {
          //   not email in database return empty array.
          if (data.length === 0) {
            res.status(400).json({ NOT_FOUND: true });
          } else {
            // check email and paswod
            if (data[0].password === password) {
              res.status(200).json({ SUCCESS: true });
            } else {
              res.status(400).json({ WRONG_PWD: true });
            }
          }
        }
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userSignin,
};

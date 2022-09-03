import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    console.log(User);
    const users = await User.find({});
    console.log(users);
    res.status(200).json({ success: true, data: users });
  } else if (req.method === "POST") {
    console.log(">>>>",User);
    const signUpUser =  await new User({
      name: req.body.name,
      email: req.body.email,
    });
    await signUpUser
      .save()
      .then((data) => res.status(201).json(data))
      .catch((e) => res.status(400).json(e));
  }
}

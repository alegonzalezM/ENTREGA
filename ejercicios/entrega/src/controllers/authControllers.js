import { generateToken } from '../utils/tokenGenerator.js';
const default_user= {id:1, email:"juan@gmail.com", pass:"juanPerez"}


   export const  login = async (req, res) => {
  const { email, password } = req.body;
  if (email === default_user.email
      && password === default_user.pass) {
    const token = generateToken(default_user);
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
}


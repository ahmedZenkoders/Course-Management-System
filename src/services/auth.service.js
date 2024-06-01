const bcrypt = require('bcrypt');
const { generateToken } = require('../middlewares/generateToken');
const { computeQuery } = require('../utils/computeQuery');
const registerUser = async (req, res) => {
  const { email, password, name, role } = req.body;
  const userTable = (role === 'teacher') ? 'teachers' : 'students';
  if (!email || !password || !name) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser =`SELECT * FROM ${userTable} WHERE email = ?, ${[email]}`;
    const ans= await computeQuery(existingUser);
    console.log(ans)
    if (ans.length > 0) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser=`INSERT INTO ${userTable} (name, email, password) VALUES (?, ?, ?), ${[name, email, hashedPassword]}`;
    const result= await computeQuery(createUser);
    console.log(result);
    const accessToken = generateToken({ email, role });
    if(result.affectedRows ===1 ){

      const newUser = { name, email, message: 'User registered successfully' };
      return res.status(201).json({ newUser, accessToken });
    }
    return res.status(401).json({message:"error"});

  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password, role } = req.body;
  const userTable = (role === 'teacher') ? 'teachers' : 'students'; 
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const userPasswordData = `SELECT password FROM ${userTable} WHERE email = ?, ${[email]}`;
    const ans=await computeQuery(userPasswordData);
    if (ans.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    const hashedPassword = ans[0].password;
    const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    const accessToken = generateToken({ email, role });
    return res.status(200).json({ message: 'Logged in successfully', accessToken });
  } catch (error) {
    console.error('Error during login:', error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { registerUser, loginUser };

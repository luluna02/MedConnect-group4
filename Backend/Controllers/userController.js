const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
//get all users
const getUsers = async (requset, response) => {
    try {
        const users = await UserModel.find();
        response.status(200).json({ users: users });
    } catch (error) {
        response.status(500).json({ msg: "error on getting users" });
    }
};
//get one user
const getOneUser = async (req, res) => {
    const id = req.params.id;
    try {
        const foundUser = await UserModel.findById(id);
        if (foundUser) {
        res.status(200).json({ user: foundUser });
        } else {
        res.status(404).json({ msg: "User not found" });
        }
    } catch (error) {
        console.error("Error on getting one user:", error);
        res
        .status(500)
        .json({ msg: "Error on getting one user", error: error.message });
    }
};


//post one user
const signUp = async (request, response) => {
    try {
    const newUser = request.body;
    const foundUser = await UserModel.findOne({ email:newUser.email });
    if(foundUser) 
    response.status(404).json({ msg: "Error on adding user", error: 'A user with this email already exists' });
    const createdUser = await UserModel.create(newUser);
    const token = jwt.sign(
        { id: createdUser._id, role: createdUser.role },
        process.env.JWT_SECRET
        );
    response.status(200).json({ user: createdUser, msg: "User added successfully",token });
    } catch (error) {
    console.error("Error on adding user:", error);
    response
    .status(500)
    .json({ msg: "Error on adding user", error: error.message });
    }
};

//update one user
const updateUser = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    try {
      const result = await UserModel.findOneAndUpdate({ _id: id },{ $set: updatedData },{new:true});
  
        res.status(200).json({ msg: "User updated successfully",user:result });
    } catch (error) {
      res.status(500).json({ msg: "Error on updating user", error: error.message });
    }
  };


const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
    const result= await User.deleteOne({ _id: id });
    if (result.deleteCount > 0) {
    res.status(200).json({ msg: "User deleted successfully" });
    } else {
    res.status(404).json({ msg: "User not found" });
    }
    } catch (error) {
    console.error("Error on deleting user:", error);
    res
    .status(500)
    .json({ msg: "Error on deleting user", error: error.message });
    }
    };

    const signIn = async (req, res) => {
      try {
        const { email, password } = req.body;
        const foundUser = await UserModel.findOne({ email });
    
        if (foundUser) {
          if (foundUser.password === password) {
            const token = jwt.sign(
                { id: foundUser._id, role: foundUser.role },
                process.env.JWT_SECRET
                );
            res.status(200).json({ user: foundUser,token });
          } else {
            res.status(404).json({ msg: "Wrong password" });
          }
        } else {
          res.status(404).json({ msg: "User does not exist" });
        }
      } catch (error) {
        console.error("Error on login:", error);
        res.status(500).json({ msg: "Error on login", error: error.message });
      }
    };
    
    
module.exports = { getUsers,getOneUser, signUp, updateUser, deleteUser,signIn
 };
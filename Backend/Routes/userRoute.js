const express = require("express");
const userRoute = express.Router();
const {
getUsers,
signUp,
updateUser,
deleteUser,
getOneUser,
signIn
} = require("../Controllers/userController");
const isAuth = require("../middleware/isAuth")
const isAutho=require('../middleware/isAutho')
userRoute.get("/users", getUsers);
userRoute.get("/users/:id", isAuth,isAutho(['user','admin']), getOneUser);
userRoute.post("/users", signUp);
userRoute.put("/users/:id",isAuth,updateUser);
userRoute.delete("/users/:id",isAuth,isAutho(['admin']), deleteUser);
userRoute.post("/users/signIn", signIn);
module.exports = userRoute;
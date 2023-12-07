const express = require("express");
var cors = require('cors');
const userRoute = require("./Routes/userRoute");
const medicationRoute = require("./Routes/medicationRoute");
const {connectDb}=require('./Configuration/connectDb')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
connectDb();
app.use(cors());
app.listen(port, (er) => {
if (er) {
console.log(err);
} else {
console.log(`server is running on port ${port}`);
}
});
app.use(express.json())
app.use("/api", userRoute);
app.use("/api", medicationRoute);
app.use('/uploads', express.static('uploads'));
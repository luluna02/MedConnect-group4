const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
url=process.env.URL
let connection=null;
const connectDb = async () => {
try {
    connection= await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
console.log("Connected to MongoDB successfully.");
} catch (error) {
console.error('Connection to MongoDB failed:', error);
}
};
module.exports = {connectDb,connection};  
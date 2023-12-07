var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
    },
    type: {
        type: String,
        enum: ['doctor', 'pharmacist'], // Allowed types
        default: 'doctor' // Default type
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Allowed roles
        default: 'user' // Default role
    },
    pharmacyName: {
      type: String,
    },
    address: {
      type: String,
    },
  },{ timestamps: true });
  
  const UserModel = mongoose.model('User', userSchema);
module.exports=UserModel;
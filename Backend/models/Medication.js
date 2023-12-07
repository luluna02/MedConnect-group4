var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const medicationSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category:{type:String,required: true},
    ingredients:{type:String,required: true},
    dosage:{type:String,required: true},
    image: {
      type: String,
      required: false
      },
  },{ timestamps: true });
  
  const MedicationModel = mongoose.model('Medication', medicationSchema);
module.exports=MedicationModel;
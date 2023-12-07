const MedicationModel = require("../models/Medication");
const UserModel = require("../models/User");
const fs =require('fs')

const addMedication= async (request, response) => {
    try {
      // Access the uploaded file via req.file
      const file = request.file;
      const {image,...newMedication} = request.body;
      const createdMedication = new MedicationModel({...newMedication,image:file.path});
      await createdMedication.save();
      response.status(200).json({ medication: createdMedication, msg: "Medication added successfully"});
    } catch (error) {
      console.error("Error on adding medication:", error);
      response
      .status(500)
      .json({ msg: "Error on adding medication", error: error.message });
    }
};

//get one medication 
const getOneMedication = async (req, res) => {
  const id = req.params.id;
  try {
      const medication = await MedicationModel.findById(id);
      if (medication) {
      res.status(200).json({  medication });
      } else {
      res.status(404).json({ msg: "medication not found" });
      }
  } catch (error) {
      console.error("Error on getting one medication:", error);
      res
      .status(500)
      .json({ msg: "Error on getting one medication", error: error.message });
  }
};

//get all medications 
const getAllMedications = async (req, res) => {
  try {

      const user=await UserModel.findById(req.user.id);
      let medications;
      if(user.role!=='admin' && user.type==='doctor' && !req.query.search)
       {
        medications = await MedicationModel.find({category:user.speciality}).sort('-createdAt').limit(10);
       }
       else {
        const regex = new RegExp(req.query.search, 'i');
        medications = await MedicationModel.find({$or:[{name:{$regex:regex}},{category:{$regex:regex}}]}).sort('-createdAt');
      }
      
      if (medications) {
      res.status(200).json({ medications });
      } else {
      res.status(404).json({ msg: "medications not found" });
      }

  } catch (error) {
      console.error("Error on getting all medications:", error);
      res
      .status(500)
      .json({ msg: "Error on getting all medications", error: error.message });
  }
};

//update one medication
const updateMedication = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const result = await MedicationModel.findOneAndUpdate({ _id: id }, { $set: updatedData },{new:true});
    res.status(200).json({ msg: "Medication updated successfully",medication:result });
  } catch (error) {
    res.status(500).json({ msg: "Error on updating Medication", error: error.message });
  }
};

//delete one medication
const deleteMedication = async (req, res) => {
  const id = req.params.id;
  try {
     const deletedMedication=await MedicationModel.findByIdAndDelete(id);
     await fs.rm(`./${deletedMedication.image}`,(err)=>console.log(`error : ${err}`))
    res.status(200).json({ msg: "Medication deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error on deleting Medication", error: error.message });
  }
};

module.exports = { addMedication,getOneMedication,getAllMedications,updateMedication,deleteMedication };
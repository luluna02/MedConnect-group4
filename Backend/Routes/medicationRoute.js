const express = require("express");
const upload = require('../multerConfiguration.js'); 
const medicationRoute = express.Router();
const {
addMedication,
getOneMedication,
getAllMedications,
updateMedication,
deleteMedication,
} = require("../Controllers/medicationController");
const isAuth = require("../middleware/isAuth");
const isAutho=require('../middleware/isAutho');
medicationRoute.post("/medication", isAuth,isAutho(['admin']), upload.single('file'),addMedication);
medicationRoute.get("/medication/all", isAuth,getAllMedications);
medicationRoute.get("/medication/:id", isAuth,getOneMedication);
medicationRoute.put("/medication/:id", isAuth,isAutho(['admin']),updateMedication);
medicationRoute.delete("/medication/:id", isAuth,isAutho(['admin']),deleteMedication);
module.exports = medicationRoute;
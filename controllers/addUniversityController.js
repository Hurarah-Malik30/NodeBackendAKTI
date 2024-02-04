const University = require("../models/universityModel/universityModel");

const addUniversityController = async (req, res) => {
try {
    const { name, fatherName, course,city,highestEducation } = req.body;

    const newUniversity = new University({
      name: name,
      fatherName: fatherName,
      course:course,
      city : city,
      highestEducation : highestEducation
    });
  await newUniversity.save()
   return res.json({ success: true, message: newUniversity });    
} catch (error) {console.log(error)
    return res.json({
        success : false,
        message : error.message})
    
}

 
};
module.exports = addUniversityController;

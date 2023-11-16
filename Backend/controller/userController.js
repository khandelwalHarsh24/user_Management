const userSchema = require("../model/userdata");

const getUserData=async (req,res)=>{
    const userData=await userSchema.find();
    if(!userData){
        res.status(500).json({ "Message": "No Data" });
    }
    res.status(200).json(userData);
}


const postUserData = async (req, res) => {
    let newUser = new userSchema({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });
    newUser = await newUser.save();
  
    if (!newUser) return res.status(404).json({"message":"The user cannot be created"});
    res.status(200).json(newUser);
};

const generateReport=async(req,res)=>{
    const userId = req.params.id;
    console.log(userId);
    try {
        // Fetch user details from the database
        const user = await userSchema.findById(userId);
        console.log(user);
        if(!user){
            res.status(400).json({"message": "Data Not Found"});
        }
        // Placeholder for report generation logic (replace with your actual logic)
        const reportData = {
          userName: user.username,
          email: user.email,
          phone: user.phone,
        };
    
        res.status(200).json(reportData);
      } catch (error) {
        console.error('Error generating user report:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports={getUserData,postUserData,generateReport}
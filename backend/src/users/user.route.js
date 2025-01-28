const express = require("express");

const router = express.Router();

router.post("/admin",async(req,res)=>{
    const{username,password} = req.body;
    try {
        const admin = await User.findOne({username});
        if(!admin){
            res.status(404).send({message:"Admin not found"})
        }
        if(admin.password !== password){
            res.status(401).send({message:"Invalid password"})
        }
    } catch (error) {
        console.error("Failed to login as admin",error)
        res.status(401).send({messge:"Failed to login admin"})
    }
})

module.exports = router;
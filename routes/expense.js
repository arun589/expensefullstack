const express=require('express');
const router=express.Router();
const appcontroller=require('../controller/appcontroller');

router.post("/user/adduser",appcontroller.postappointment);
router.get("/user/getusers",appcontroller.getalluser);
router.delete("/user/deleteuser/:id",appcontroller.deleteuser);
module.exports=router;
const express=require('express');
const router=express.Router();

const {getUserData,postUserData, generateReport}=require('../controller/userController');

router.route('/api/v1/getUser').get(getUserData);
router.route('/api/v1/postUser').post(postUserData);
router.route('/api/v1/users/:id').post(generateReport);

module.exports=router;
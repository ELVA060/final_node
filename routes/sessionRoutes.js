const express = require('express')
const router = express.Router()

const sessionController = require('../controllers/sessionControllers')
const veryfyToken= require('../middelware/verifyToken')

router.get("/currentUser", veryfyToken, sessionController.getCurrentUser)

module.exports=router
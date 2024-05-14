const jwt = require("jsonwebtoken")
const jwtSecret = "99d8ac0f78a3ceee97001445eea580bee7f9a00ec10f35f01542ec3e56f0f2b9"

function generateToken(user) { const payload = { userId: user._id, email: user.email, };
const token=jwt.sign(payload,jwtSecret,{expiresIn:"1h"});
return token
}

module.exports={generateToken}
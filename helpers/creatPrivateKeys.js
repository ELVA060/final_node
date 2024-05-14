const crypto= require("crypto");
const secret= crypto.randomBytes(32).toString("hex")
console.log(secret) //99d8ac0f78a3ceee97001445eea580bee7f9a00ec10f35f01542ec3e56f0f2b9
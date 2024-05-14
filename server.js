const express = require('express')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const sessionRoutes = require('./routes/sessionRoutes')
const conectUrl = require('./basededatos/basededatos')

const app = express()
const port = 3001

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/session", sessionRoutes)

conectUrl()
app.listen(port,()=> {
    console.log(`servidor corriendo en  ${port}`)
  })
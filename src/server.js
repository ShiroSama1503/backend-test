require('dotenv').config()
const express = require('express')
const { hostname } = require('os')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const { config } = require('dotenv')
const webRoutes = require('./routes/web')



const app = express() //app ẽpress
const port = process.env.PORT || 3000 //port 
const hostname1 = process.env.HOST_NAME


//config template engine
configViewEngine(app)


//khai báo route
app.use('/', webRoutes)

app.listen(port, hostname1, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const jwt = require('jsonwebtoken')
const apiRoutes = require('./routes')
const app = express();
const { PORT}=require('./config');
app.use('/api',apiRoutes);

app.get()

app.listen(PORT, function() {
    console.log(`Server Started on PORT ${PORT}`)
})
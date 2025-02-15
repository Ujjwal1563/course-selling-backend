const express = require('express');
const { JWT_USER_PASSWORD } = require('../config');
const jwt = require("jsonwebtoken");

function userMiddlewares(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_USER_PASSWORD);
    if(!decoded){
        return res.status(403).json({
            message:"You are Not signed In"
        })
    }
    req.userId = decoded.id;
    next()
}

module.exports = {
    userMiddlewares
}
const express = require('express')

function adminMiddlewares(req,res,next){
    const token = req.headers.token;
    
}
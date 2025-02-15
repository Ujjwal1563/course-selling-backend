const express = require("express");
const { JWT_ADMIN_PASSWORD } = require("../config");
const jwt = require('jsonwebtoken')

function adminMiddlewares(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
  if (!decoded) {
    return res.status(403).json({
      message: "You are Not signed In",
    });
  }
  req.creatorId = decoded.id;
  next();
}

module.exports = {
  adminMiddlewares,
};

const express = require("express");
const { purchaseModel } = require("../db");
const router = express.Router();

router.get("/purchase",async function (req, res) {
    const userId = req.body.userId;
    const courseId = req.body.courseId;
    await purchaseModel.create({
        userId:userId,
        courseId:courseId
    })
    res.json({
        message:"You have Successfully purchased the course"
    })
});
router.get("/preview", function (req, res) {
    const 
});

module.exports = router;

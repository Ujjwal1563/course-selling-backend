const express = require("express");
const { purchaseModel, courseModel } = require("../db");
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
router.get("/preview",async function (req, res) {
    const response = await courseModel.find({});
    res.json({
        message:"All the Courses",
        courses:response
    })
});

module.exports = router;

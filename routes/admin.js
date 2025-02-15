const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { adminModel } = require("../db");
const { z } = require("zod");

router.post("/signup", async function (req, res) {
  const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );
  const signupSchema = z.object({
    email: z.string().email({ message: "email is not valid" }),
    password: z
      .string()
      .min(3)
      .max(25)
      .regex(passwordValidation, { message: "password is not valid" }),
    firstName: z.string().min(3),
    lastName: z.string().min(3),
  });
  const parsedData = signupSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({
      status: 400,
      message: "Incorrect format",
    });
  }
  try {
    const { email, password, firstName, lastName } = parsedData.data;
    const hashedPassword = await bcrypt.hash(password, 5);
    await adminModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
    res.json({
      message: "Account created Successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});
router.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const matchPassword = bcrypt.compare();
});
router.post("/create", function (req, res) {});
router.patch("/add", function (req, res) {});
router.delete("/delete", function (req, res) {});

module.exports = router;

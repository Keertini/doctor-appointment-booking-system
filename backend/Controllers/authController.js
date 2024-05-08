import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// user register
export const register = async (req, res) => {
  try {
    // Hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Creating a new user instance with hashed password
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    // Saving the new user to the database
    await newUser.save();

    // Sending success response
    res.status(200).json({ success: true, message: "Successfully created!" });
  } catch (error) {
    // Handling error if registration fails
    res
      .status(500)
      .json({ success: false, message: "Failed to create! Try again." });
  }
};

// user login
export const login = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });

    // If user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    // If user exists, check the password by comparing hashes
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // If password is incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password!" });
    }

    // Extracting user data excluding password and role
    const { password, role, ...rest } = user._doc;

    // Creating JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // Setting token in the browser cookies and sending response to client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({ token, data: { ...rest }, role });
  } catch (error) {
    // Handling error if login fails
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};

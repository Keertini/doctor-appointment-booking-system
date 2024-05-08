import User from "../models/User.js";

// Create new User
export const createUser = async (req, res) => {
  // Creating a new User instance with data from request body
  const newUser = new User(req.body);

  try {
    // Saving the new user to the database
    const savedUser = await newUser.save();

    // Sending success response with the saved user data
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully created",
        data: savedUser,
      });
  } catch (error) {
    // Handling error if creating user fails
    res
      .status(500)
      .json({ success: true, message: "Failed to create. Try again!" });
  }
};

// Update User
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    // Finding and updating the user by id with data from request body
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    // Sending success response with the updated user data
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully updated",
        data: updatedUser,
      });
  } catch (error) {
    // Handling error if updating user fails
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    // Deleting the user by id
    await User.findByIdAndDelete(id);

    // Sending success response
    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (error) {
    // Handling error if deleting user fails
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

// Get single User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    // Finding a user by id
    const user = await User.findById(id);

    // Sending success response with the user data
    res
      .status(200)
      .json({ success: true, message: "Successfully", data: user });
  } catch (error) {
    // Handling error if getting user fails
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// Get all Users
export const getAllUser = async (req, res) => {
  try {
    // Finding all users
    const users = await User.find({});

    // Sending success response with the list of users
    res
      .status(200)
      .json({ success: true, message: "Successfully", data: users });
  } catch (error) {
    // Handling error if getting all users fails
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

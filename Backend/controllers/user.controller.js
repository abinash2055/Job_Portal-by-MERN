import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

// For User Registration Process
export const register = async (req, res) => {
  // Taking data from User
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;

    // To check all data entered or not
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing in the field",
        success: false,
      });
    }
    // For cloudinary
    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    // to check email already used or not
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email..",
        success: false,
      });
    }

    // Changing password to hashed password value
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: cloudResponse.secure_url,
      },
    });

    return res.status(201).json({
      message: "Account created successfully..",
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Error during registration..",
      success: false,
    });
  }
};

// For Login Process
export const login = async (req, res) => {
  try {
    console.log("In in Login");
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing..",
        success: false,
      });
    }

    // To check email is present in database or not
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password..",
        success: false,
      });
    }

    // To check password matched or not
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password..",
        success: false,
      });
    }

    // To check role is right or not
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with current role..",
        success: false,
      });
    }

    // To generate token as data
    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    // To return user
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    // stores token as Cookie
    // 1d in time ==> ( 1*24*60*60*1000 )
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Error during login..",
      success: false,
    });
  }
};

// For logout Process
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully...",
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Error during logout..",
      success: false,
    });
  }
};

// Update Profile Process
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;

    // cloudinary ..............................
    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }
    const userId = req.id; // it comes from middleware as authentication

    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "User not found...",
        success: false,
      });
    }

    // updating data
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;

    // resumes comes here later...................
    // to check response
    if (cloudResponse) {
      // It saves the cloudinary url
      user.profile.resume = cloudResponse.secure_url;

      // To save original file name
      user.profile.resumeOriginalName = file.originalname;
    }

    await user.save();

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Profile updated successfully...",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }

  try {
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Error during profile update.",
      success: false,
    });
  }
};

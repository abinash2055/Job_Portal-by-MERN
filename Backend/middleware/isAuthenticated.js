import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    // For token and cookie
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated...",
        success: false,
      });
    }

    // to decode token
    const decode = await jwt.verify(token, process.env.SECRET_KEY);

    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server error during authentication..",
      success: false,
    });
  }
};

export default isAuthenticated;

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../resources/users/users.model"; // Import your User model
const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Get the token from the "Authorization" header
  const authHeader = req.header("Authorization");

  // Check if the header is missing
  if (!authHeader) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Split the header value to get the token
  const tokenParts = authHeader.split(" ");

  // Check if the header format is valid
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res.status(401).json({ msg: "Invalid authorization header format" });
  }

  const token = tokenParts[1];

  try {
    // Verify the token using your JWT secret
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET_QURANLYRIC);

    // Find the usdecodedoken
    const user = await User.findById(decoded.id).select(
      "email _id  name language country avatar isSubscribed subscriptionId subscriptionPlan"
    );

    // If the userdecodedist, return a 401 Unauthorized response
    if (!user) {
      return res.status(401).json({ msg: "Token is not valid" });
    }

    // Attach the user object to the request for further use
    req.user = user;
    next(); // Call the next middleware or route handler
  } catch (err) {
    // Handle token verification errors
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

export default authMiddleware;

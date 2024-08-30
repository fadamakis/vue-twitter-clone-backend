import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  if (["/users/login", "/users/register", "/"].includes(req.path)) {
    return next();
  }

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.userId) {
      return res.status(400).json({ message: "Token structure unexpected" });
    }
    req.userId = decoded.userId;

    next();
  } catch (e) {
    console.error(e);
    if (e instanceof jwt.TokenExpiredError) {
      res.status(401).send({ message: "Token expired" });
    } else if (e instanceof jwt.JsonWebTokenError) {
      res.status(401).send({ message: "Invalid Token" });
    } else {
      res.status(500).send({ message: "Server Error" });
    }
  }
}

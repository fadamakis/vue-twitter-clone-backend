import multer from "multer";
import path from "path";
import fs from "fs";

// Define allowed MIME types
const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];

const storage = multer.diskStorage({
  destination: function (req, _, cb) {
    // Assuming `userId` is available in the request body; you might need to adjust based on your implementation.
    // For better security, consider using a verified userId from the user's session or authentication token.
    const userId = req.userId || "default";
    const destPath = path.join("uploads", userId); // Constructs a path like 'uploads/userId'

    fs.mkdirSync(destPath, { recursive: true }); // Ensures that the directory exists
    cb(null, destPath);
  },
  filename: function (req, file, cb) {
    // Sanitize the file name and generate a unique filename with the original extension
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const basename = path
      .basename(file.originalname, ext)
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase();
    cb(null, `${basename}-${uniqueSuffix}${ext}`);
  },
});

// Define multer upload middleware with additional security options
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2 MB file size limit
  },
  fileFilter: function (req, file, cb) {
    // Check if the file's MIME type is in the allowed list
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Invalid file type. Only JPG, PNG, and GIF files are allowed."
        )
      );
    }
  },
});

export default upload;

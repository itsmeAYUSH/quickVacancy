const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure the directory for uploads exists
const uploadDir = "./uploads/resumes";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true }); // Create the directory if it doesn't exist
}

// Set up storage engine with destination and filename handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Specify the directory for uploaded files
  },
  filename: (req, file, cb) => {
    // Create a unique filename using fieldname, current timestamp, and file extension
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// File type validation function
function checkFileType(file, cb) {
  const filetypes = /pdf/; // Allow only PDFs
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    cb(null, true); // File is valid
  } else {
    cb(new Error("Error: Only PDF files are allowed!")); // Provide an error message
  }
}

// Initialize multer with storage, file size limits, and file type validation
const upload = multer({
  storage: storage, // Use disk storage for storing files
  limits: { fileSize: 10 * 1024 * 1024 }, // Maximum file size of 10MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb); // Validate file type
  },
}).single("resume"); // 'resume' is the field name in the form

module.exports = upload; // Export the upload middleware

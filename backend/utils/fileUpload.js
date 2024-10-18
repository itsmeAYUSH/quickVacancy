const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set the destination path for uploaded resumes
const destinationPath = './uploads/resumes';

// Ensure the uploads/resumes directory exists
if (!fs.existsSync(destinationPath)) {
    fs.mkdirSync(destinationPath, { recursive: true });
}

// Set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destinationPath); // Save resumes in uploads/resumes
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    },
});

// Check file type for resumes (only PDFs allowed)
function checkFileType(file, cb) {
    const allowedFileTypes = /pdf/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);

    console.log(`File received: ${file.originalname}, Type: ${file.mimetype}`);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Error: Only PDF files are allowed!'));
    }
}

// Initialize upload
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Max file size 10MB
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    },
});

// Export the multer upload instance without calling .single()
module.exports = upload;
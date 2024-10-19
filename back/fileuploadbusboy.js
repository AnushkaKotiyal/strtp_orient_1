

const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const Busboy = require('busboy');

const app = express();
const PORT = 3000;

// Ensure the uploads directory exists
const uploadPath = './uploads';
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

// Middleware for file parsing
const fileParsingMiddleware = (req, res, next) => {
    const busboy = new Busboy({ headers: req.headers });
    console.log(req.headers)
    req.file = null; // Initialize req.file to hold the uploaded file

    busboy.on('file', (fieldname, file, filename) => {
        const uniqueName = `${filename}-${uuidv4()}${path.extname(filename)}`;
        const filePath = path.join(uploadPath, uniqueName);
        req.file = { stream: file, filename: uniqueName, path: filePath };

        const writeStream = fs.createWriteStream(filePath);
        file.pipe(writeStream);

        writeStream.on('error', (err) => {
            return res.status(500).json({ message: "File upload failed", error: err.message });
        });

        writeStream.on('finish', () => {
            console.log(`Uploaded: ${filePath}`);
        });
    });

    busboy.on('finish', () => {
        next(); // Proceed to the next middleware or route handler
    });

    req.pipe(busboy); // Pipe the request to Busboy for parsing
};

// Middleware to handle file uploads
app.post('/upload', fileParsingMiddleware, (req, res) => {
    const file = req.file; // Get the uploaded file from the request

    if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    res.end();
    

});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

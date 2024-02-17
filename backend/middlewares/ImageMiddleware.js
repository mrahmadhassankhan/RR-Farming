const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/Images");
    },
    filename: (req, file, callback) => {
        callback(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({
    storage: storage,
});

const categoryUploadMiddleware = (req, res, next) => {
    upload.single("categoryImage")(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return res.status(500).json({ message: "File upload error" });
        } else if (err) {
            // An unknown error occurred when uploading.
            console.error(err);
            return res.status(500).json({ message: "Unknown error" });
        }

        // No error occurred, proceed to the next middleware/route handler.
        next();
    });
};


const productUploadMiddleware = (req, res, next) => {
    upload.single("productImage")(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return res.status(500).json({ message: "File upload error" });
        } else if (err) {
            // An unknown error occurred when uploading.
            console.error(err);
            return res.status(500).json({ message: "Unknown error" });
        }

        // No error occurred, proceed to the next middleware/route handler.
        next();
    });
};

module.exports = { categoryUploadMiddleware, productUploadMiddleware };
import multer from "multer";

// For Storage
const storage = multer.memoryStorage();

export const singleUpload = multer({ storage }).single("file");

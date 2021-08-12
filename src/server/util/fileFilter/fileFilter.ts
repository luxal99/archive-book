export const fileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(csv|xls|xlsx|pdf|docx|doc)$/)) {
    return callback(new Error("File type not allowed!"), false);
  }
  callback(null, true);
};

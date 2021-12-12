const createError = require("http-errors");
const multer = require("multer");
const path = require("path");
exports.singleFileUploads = (
  subfolder_path,
  allowed_file_type,
  max_file_size,
  error_msg,
) => {
  // file upload folder
  const UPLOADS_FOLDER = `${__dirname}/../public/uploades/${subfolder_path}`;

  //define the sorage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();
      cb(null, fileName + fileExt);
    },
  });
  //preapre the final multer upload project
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_type.includes(allowed_file_type)) {
        cb(null, true);
      } else {
        cb(createError(error_msg));
      }
    },
  });
  return upload;
};

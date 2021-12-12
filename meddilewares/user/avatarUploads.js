const { singleFileUploads } = require("../../utilities/singleFileUploads");

exports.avatarUploads = (req, res, next) => {
  const upload = singleFileUploads(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg .png .jpeg allowed",
  );
};

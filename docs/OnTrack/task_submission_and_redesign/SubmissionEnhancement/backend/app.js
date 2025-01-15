const express = require("express");
const multer = require("multer");
const cors = require("cors");

const port = 4000;
const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage });

app.post("/file", upload.single("file"), function (req, res, next) {
  const file = req.file;
  if (file) {
    res.json(req.file);
  } else throw "error";
});

app.post("/multiplefiles", upload.array("files"), function (req, res, next) {
  const files = req.files;
  if (Array.isArray(files) && files.length > 0) {
    res.json(req.files);
  } else {
    res.status(400);
    throw new Error("No file");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ` + port);
});

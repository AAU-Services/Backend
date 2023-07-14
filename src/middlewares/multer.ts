import multer from "multer";
import DatauriParser from "datauri/parser";
import path from "path";
import { Request } from "express";

const parser = new DatauriParser();

const dataUri = (req: Request) => {
  if (req.file === undefined) return null;
  return parser.format(
    path.extname(req.file.originalname).toString(),
    req.file.buffer
  );
};

const storage = multer.memoryStorage();
const multerUpload = multer({ storage }).single("image");
const multerUploads = multer({ storage }).array("images", 10);
export { multerUpload, dataUri, multerUploads };

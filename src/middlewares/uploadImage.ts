import { Request, Response } from "express";
import { cloudinary } from "../utils/cloudniary";
import { multerUpload, dataUri, multerUploads } from "./multer";

const upload = async (req: Request, res: Response, next: Function) => {
  try {
    if (req.file) {
      const file = dataUri(req)!.content;

      if (file != null) {
        const result = await cloudinary.uploader.upload(file!);
        req.body.image = result.secure_url;
      }
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

const uploads = async (req: Request, res: Response, next: Function) => {
  try {
    if (req.files) {
      const files = req.files as Express.Multer.File[];

      const urls = [];
      for (let i = 0; i < files.length; i++) {
        const file = dataUri(req)!.content;
        if (file != null) {
          const result = await cloudinary.uploader.upload(file!);
          urls.push(result.secure_url);
        }
      }
      req.body.images = urls;
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

const uploadImage = [multerUpload, upload];
const uploadImages = [multerUploads, uploads];

export { uploadImage, uploadImages };

// Usage:
// import {uploadImage} from "../middlewares/uploadImage"; (for single image, uploadImages for multiple images)
// use uploadImage middleware in the route you want to upload image
// router.post("/upload", uploadImage,  controller),
//you can access the image url in the controller by req.body.image
//if there is no image uploaded, req.body.image will be undefined

//if you want to upload multiple images, use uploadImages middleware
// router.post("/upload", uploadImages,  controller),
//you can access the image urls in the controller by req.body.images
//if there is no image uploaded, req.body.images will be undefined

//IMPORTANT: the field name must be "image" for single image upload and "images" for multiple image upload

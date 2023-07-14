import cloudinaryV2 from "cloudinary";

const cloudinary = cloudinaryV2.v2;

const cloudinaryConfig = () =>
  cloudinary.config({
    cloud_name: "dapttyuqx",
    api_key: "462572187958429",
    api_secret: "FtFZlXEB0mpuzd0K7PAE4tjueRE",
  });

cloudinaryConfig();

export { cloudinary };

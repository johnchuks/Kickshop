const cloudinary = require('cloudinary-core');

const cl = cloudinary.Cloudinary.new();
module.exports = cl.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const cloudinary = require("cloudinary")

const dotenv = require("dotenv")

dotenv.config({path:"backend/config/config.env"})

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key:process.env.CLOUDINARY_CLIENT_API,
    api_secret:process.env.CLOUDINARY_CLIENT_SECRET
})
const fs = require('fs');
const pump = require('pump');
const cloudinary = require('../../drivers/cloudinary/connection');

const fileUploader = async (files) => {
    const urlImages = [];
    for await (const part of files) {
        const storedFile = fs.createWriteStream(`./${part.filename}`);
        pump(part.file, storedFile);
        const { secure_url } = await cloudinary.uploader.upload(`./${part.filename}`);
        urlImages.push(secure_url);
        fs.unlink(`./${part.filename}`, (err) => {
            if (err) {
                throw new Error();
            }
        });
    }
    return urlImages;
};

module.exports = fileUploader;

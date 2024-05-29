const multer = require("multer");

const cloudinary = require("cloudinary").v2;

const { CloudinaryStorage } = require("multer-storage-cloudinary");



const storage = new CloudinaryStorage({

    cloudinary: cloudinary,
    params: {
        folder: "games",
        alllowedFormats: ["jpg", "png", "jpeg", "gif"]
    }

});

// const createCloudinaryStorage = (folderName) => {
//     return new CloudinaryStorage({
//         cloudinary: cloudinary,
//         params: {
//             folder: folderName, 
//             allowedFormats: ["jpg", "png", "jpeg", "gif"]
//         }
//     });
// };
// Para poder usar la funcion que he creado usaremos:

//Ejm: const storageForGames = createCloudinaryStorage("games");
//const storageForConsoles = createCloudinaryStorage("consoles");

const upload = multer({ storage });



module.exports = upload;
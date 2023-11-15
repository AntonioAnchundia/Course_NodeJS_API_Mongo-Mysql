const multer = require("multer");

//configuracion para el multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)
    },
    filename: function(req, file, cb){
        //Formato.pdf, .png, jpg
        
        //Obtención de la extension
        const ext = file.originalname.split('.').pop(); //agarra el ultimo valor del array la cual es el ["name", "png"]
        const filename = `file-${Date.now()}.${ext}`; 
        cb(null, filename)
    }
});

//multer usa un middleware, es una protección la cual usa el filtro 
const uploadMiddleware = multer({storage}) //storage:storage

module.exports = uploadMiddleware;
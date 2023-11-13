const express = require("express");
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname; //__dirname = es la ruta de donde se encuentra el archivo src/routes/tracks.js

const removeExtension = (fileName) => {
    //tracks.js [tracks, js]
    return fileName.split('.').shift() //Extrae solamente el nombre del archivo
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) //users, tracks, storages
    //Si es diferente del nombre del archivo index.js, se hace uso ese archivo
    if(name !== 'index'){
        router.use(`/${name}`, require(`./${file}`)) //http://localhost/api/tracks
    }
})


module.exports = router
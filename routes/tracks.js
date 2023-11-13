const express = require("express");
const router = express.Router();

//Se esta haciendo de una ruta dinamica, se debe establecer bien el nombre del archivo, porque tendra ese mismo nombre
//localhost:/api/${nombre_archivo} = localhost:/api/tracks
 router.get("/", (req, res) => {
    const data = ["hola"]
 })

module.exports = router
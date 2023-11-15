const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const{validatoCreateItem } = require("../validators/tracks")
const {getItems, getItem,createdItems} = require("../controllers/tracks")

//Se esta haciendo de una ruta dinamica, se debe establecer bien el nombre del archivo, porque tendra ese mismo nombre
//localhost:/api/${nombre_archivo} = localhost:/api/tracks
 router.get("/", getItems);
 router.get("/", getItem);
 router.post("/", validatoCreateItem, createdItems);

module.exports = router
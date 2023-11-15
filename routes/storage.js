const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { createdItems } = require("../controllers/tracks");

//se puede poner .multi() para multiples archivos
router.post("/",uploadMiddleware.single("myfile"),createdItems)

//Ruta guarda la imagen en una carpeta local en nuestra computadora esto iria en el controlador
// router.post("/",uploadMiddleware.single("myfile"),(req, res) => {
//     res.send({a:1})
// })

module.exports = router;
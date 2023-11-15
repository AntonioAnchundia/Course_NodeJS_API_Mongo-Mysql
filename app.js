require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json()) //Para que capture el json del post
app.use(express.static()) //los recursos public e staticos quiero que lo saques de la carpeta storafe


/**
 * Puerto en el que se va ejecutar
 */
//const port = 3000
const port = process.env.PORT || 3000

/**
 * Invocacion de la ruta
 */
app.use("/api", require("./routes"))

/**
 * Escucha del puerto
 */
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnect()
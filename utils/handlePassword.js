const bcryptjs = require("bcryptjs")

/**
 * Metodo de encriptacion de contraseña
 * 
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash
}


/**
 * Metodo donde compara la contraseña ingresada y el hash guardado en la BD 
 */
const compare = async(passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports ={encrypt,compare};
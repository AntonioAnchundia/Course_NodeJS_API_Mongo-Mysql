const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * Se pasa el objeto del usuario
 * @param {*} user 
 */
const tokenSign = async (user) => {
    const sign = jwt.sign(
    {
        _id: user._id,
        role: user.role
    },
    JWT_SECRET,
    {
        expiresIn: "2h",
    }
    );

    return sign
};

/**
 * Sedebe pasa el token de sesion JWT
 */
const verifyToken = async (tokenJwt) => {
    try{
        return jwt.verify(tokenJwt, JWTT_SECRET)
    }
    catch(e){
        return null
    }
};

module.exports = { tokenSign, verifyToken };
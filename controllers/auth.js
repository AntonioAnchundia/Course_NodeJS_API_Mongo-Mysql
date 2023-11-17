const {matchedData} = require("express-validator");
const {encrypt, compare} = require("../utils/handlePassword");
const {tokenSign} = require("../utils/handleJwt");
const {handleHttpError} = require("../utils/handleError");

const { usersModel } = require("../models"); 
/**
 * Este controlador es el encargado de registrarnos un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
    try{
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = {...req, password }; //...req signifca que se crea un objeto con la informacion que ya viene, creando un objeto nuevo, agregar o escrirle la propiedad password, en este caso se sobreescribe
        const dataUser = await usersModel.create(body);
        dataUser.set('password', undefined, ({strict:false}));
        
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
    
        res.send({data})
    }
    catch(e){
        handleHttpError(res, 'Error_Register_USER')
    }
}

const loginCtrl = async (req, res) => {
    try{
        req = matched(req);
        const user= await userModel.findOne({email:req.email}); 
        if(!user){
            handleHttpError(res, 'User_NOT_EXISTS', 404)
            return
        }

        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword)
        if(!check){
            handleHttpError(res, "PASSWORD_INVALID", 401);
            return
        }

        const data = {
            token: tokenSign(user),
            user //es el usuario que se va encontrar en la funciopn de arriba
        }

        res.send({data})
    }
    catch(e){
        handleHttpError(res, 'Error_Login_USER')
    }
}

module.exports = { registerCtrl, loginCtrl }
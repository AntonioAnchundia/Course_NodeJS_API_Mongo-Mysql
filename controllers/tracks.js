const { matchedData } = require('express-validator');
const {tracksModel} = require('../models');
const {handleHttpError} = require('../utils/handleError')

/**
 * Otener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try{
        const data = await tracksModel.find({});

        //res.send({data:data}) es igual a data
        res.send({ data })
    }catch(e){
        handleHttpError(res,"Error_GET_ITEMS")
    }
}

/**
 * Otener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {

}

/**
 * Crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createdItems = async (req, res) => {
    try{

        
        //PARTE DEL MIDDLEWARE
        // const body = req.body
        // const bodyClean = req = matchedData(req) //body es el cuerpo json que el usuario ingresa puede tener mas item json y eso no esta en nuestro modelo, entonces body clean lo limpia y solo acepta los items del modelo especificado
        //res.send({body, bodyClean}); //body es el cuerpo json que el usuario ingresa puede tener mas item json y eso no esta en nuestro modelo, entonces body clean lo limpia y solo acepta los items del modelo especificado


        const body = matchedData(req)
        const data = await tracksModel.create(body)

        // const {body} = req
        // console.log(body)
        // const data = await tracksModel.create(body)
        res.send({data}); 
    }catch(e){
        handleHttpError(res,"Error_CREATE_ITEMS")
    }
}

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = (req, res) => {

}

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = (req, res) => {

}

module.exports = { getItems, getItem, createdItems, updateItems, deleteItems }
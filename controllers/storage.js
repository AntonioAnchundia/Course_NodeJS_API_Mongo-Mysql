const {storageModel} = require('../models');
const PUBLIC_URL = proccess.env.PUBLIC_URL ;

/**
 * Otener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({});

    //res.send({data:data}) es igual a data
    res.send({ data })
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
    const {body, file} = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.created(fileData)
    res.send({data})
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
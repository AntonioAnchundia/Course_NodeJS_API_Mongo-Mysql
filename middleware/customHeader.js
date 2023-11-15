
//SI EXISTE ESTA API, SE HACE LA VALIDACION Y CONSUMIR ESA API ESTE ES UN EJEMPLO DE LOS MIDDLEWARE
const customHeader = (req, res, next) => {
    try{
        const apikey = req.headers.api_key;
        if(apikey === 'leifer-01'){
            next()
        }else{
            res.status(403)
            res.send({error: "API KEY no es la correcta"})            
        }
    }catch(e){
        res.status(403)
        res.send({error: "Algo ocurrio en el custom header"})
    }
}

module.exports = customHeader
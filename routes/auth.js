const express = require("express");
const {loginCtrl, registerCtrl} = require("../controllers/auth");
const router = express.Router();
const {validateLogin, validateRegister } = require("../validators/auth");

/**
 * Registro con clave de encriptación, toda la logica está en la ruta, por lo que
 * se redigira en el controller
 */
// router.post("/register", validateRegister , async (req, res) => { 
//     req = matchedData(req);
//     const passwordHash = await encrypt(req.password);
//     const body = {...req, password }; //...req signifca que se crea un objeto con la informacion que ya viene, creando un objeto nuevo, agregar o escrirle la propiedad password, en este caso se sobreescribe
//     const dataUser = await userModel.create(body);
//     dataUser.set('password', undefined, ({strict:false}));
    
//     const data = {
//         token: await tokenSign(dataUser),
//         user: dataUser
//     }

//     res.send({data})
// });


router.post("/register", validateRegister, registerCtrl );

//ruta de auth/login
router.post("/login", validateLogin , loginCtrl);

//ruta de auth/register


module.exports = router
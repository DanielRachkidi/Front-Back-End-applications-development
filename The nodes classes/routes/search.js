const express = require('express')
const userModel = require('../models/userModel')

const Router = express.Router()
/*Router.get('/all',  (req, res) => {
    if(){
        return res.status(500).json({'msg': 'User not active !'})

    }
    else{
    const users = auth.decode(req.headers.authorization)
    user.getAllUsers(req.params).then(userModel => res.send(userModel)) 
    }
})
*/

Router.get('/', function(req, res) {
    const users = userModel.find({})

    return res.status(200).json(users)

});

module.exports = Router
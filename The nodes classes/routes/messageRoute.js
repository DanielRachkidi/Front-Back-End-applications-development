const express = require('express')
const messageModel = require('../models/messageModel')

const Router = express.Router()

Router.get('/', async (req, res) => {
    messages = await messageModel.find({})
    return res.status(200).json(messages)
})

Router.post('/', async (req, res) => {
    const {message} = req.body

    const messageObj = new messageModel(message)
    await messageObj.save()
    return res.status(200).json(messageObj)
})
Router.put('/:index', (req, res) => {
    const {index} = req.params // from the route
    
    const {_v} = req.body // from the body
    
    if (typeof messages[index] != 'undefined') {
        if (typeof _v != 'undefined') {
            messages[index]._v = _v
        }
    } else {
        return res.status(500).json({"msg": "message not found !"})
    }

    return res.status(200).json(messages[index])
})


Router.delete('/:_id', async (req, res) => {
    const {id} = req.params


    if (typeof messages[_id] != 'undefined') {
        todos.splice(_id, 1)
        return res.status(200).json({"msg": "Todo well deleted !"})
    } else {
        return res.status(500).json({"msg": "Todo not found !"})
    }
   
    })
   


module.exports = Router
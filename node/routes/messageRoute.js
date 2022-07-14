const express = require('express')
const messageModel = require('../models/messageModel')

const Router = express.Router()

Router.get('/', async (req, res) => {
    messages = await messageModel.find({}).populate('user')
    return res.status(200).json(messages)
})

Router.post('/', async (req, res) => {
    const {message, user} = req.body   

    const messageObj = new messageModel(message)
    await messageObj.save()

    return res.status(200).json(messageObj)
// messageModel.updateOne( { _id: user._id }, { $push: { message: {
//     from: data.from,
//     type: 'Text',
//     text: data.message
//   }}
//  }, { safe: true, upsert: true }).exec()
// return res.user(`${post.id}`)
})

/*
Router.put('/:index', async (req, res) => {
    const {index} = req.params // from the route
    
    const {name} = req.body // from the body
    
    if (typeof messages[index] != 'undefined') {
        if (typeof name != 'undefined') {
            messages[index].name = name
        }
    } else {
        return res.status(500).json({"msg": "message not found !"})
    }

    return res.status(200).json(messages[index])
})


Router.delete('/:id', async (req, res) => {
    const {id} = req.params

    
    if (typeof messages[id] != 'undefined') {
        messages.splice(id, 1)
        return res.status(200).json({"msg": "message well deleted !"})
    } else {
        return res.status(500).json({"msg": "message not found !"})
    }

    })
   
*/ 


Router.put('/:messageId', async (req, res) => {
    const {name} = req.body.message
    const {messageId} = req.params

    const message = await messageModel.findByIdAndUpdate(messageId, {
        name: name
    }, {
        new: true
    })

    return res.status(200).json(message)
})

Router.delete('/:messageId', async (req, res) => {
    const {messageId} = req.params

    await messageModel.findOneAndDelete({_id: messageId})
    return res.status(200).json({"msg": "Message well deleted !"})
})

module.exports = Router
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({ 
    emial:{
        type: STRING,
        unique: true
    },
    password: {
        type: STRING,
        unique: true
    },
    username:{
        type: STRING,
        unique: true
    },

    active: true
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true    
})

const User = mongoose.model('User', userSchema)

module.exports = User
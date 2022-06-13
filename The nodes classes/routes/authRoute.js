const express = require('express')
const bcrypt = require('bcrypt')

const userModel = require('../models/userModel')

const Router = express.Router()

Router.post('/register', async(req, res) => {
    const {email, password, username} = req.body

    if ( (email && email !== "") && (password && password !== "" && password.length >= 6)) {
        const hash = bcrypt.hashSync(password, 10)
        
        try {
            const User = new userModel({
                email: email,
                username,
                password: hash,
                active: 1
            })

            const user = await User.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({'msg': error.message})
        }
    } else {
        res.status(500).json({"msg": "Email and password are required, and password should be at least 6 caracters !"})
    }
})

/*
 * Params: Email and Password
 * Check if information are good (use bcrypt)
 * if it's good send back the user
 * try to add session to express
 */
/*

Router.post('/login', async (req, res) => {
    const {email, password} = req.params

    if ( (email && email !== "") && (password && password !== "")) {
        const user = await userModel.findOne({'email': email, 'password':password})
        console.log(user)


        
        
    } else {
        res.status(500).json({"msg": "Email and password are required !"})
    }
   
})*/



Router.post('/login/:index', async (req, res) => {
    const  email  =  req.body.email;
    const  password  =  req.body.password;
    const {index} = req.params

    await userModel.findOne({_id: index})
    
        if ((password=="" || password !== "password") ||  (!email == email || email =="")){
            const  result  =  bcrypt.compare(password == userModel.password);
            if(!result) {return  res.status(401).send('Password not valid!');}

            return  res.status(500).send('Server error!');}


      

        res.status(200)
        res.json({
          "answer":"Success",
        })

    });



/*

Router.post('/login', (req, res)=> {
    var email = req.body.email;
    var password = req.body.password
   
                if (data[0].password == password) {
                    req.session['id']=data[0].ID;
                    req.session.email = data.email;
                    res.redirect('/');
                }else {
                    res.status(404).send('This password is not incorrect!').end();
                }
            
        
    
});*/

Router.get('/session/:index', async (req, res) => {
    const {index} = req.params

    await userModel.findOne({_id: index})
    console.log(req.session && req.session.email);
    res.end(`${req.session && req.session.email}`)
});
  

module.exports = Router
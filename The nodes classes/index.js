const { Router } = require('express')
const express = require('express')
const req = require('express/lib/request')

const todoRouter = require('./routes/todo')
const app = express()
app.use(express.json())
/*app.use(bodyParser.json())
app.use(bodyParser.urlconnect({extended: true}))*/

app.get('/', function(request, response){

    response.status(200).send('It works !')
})



app.use('/todos', todoRouter)

const port = 4500
app.listen(port, function(){

    console.log(`'Server is listening on http://localhost:${port}`)
})


const { Router } = require('express')
const express = require('express')
const morgan = require('morgan')
const req = require('express/lib/request')

const todoRouter = require('./routes/todo')
const { response } = require('express')
const app = express()
app.use(express.json())
app.use(morgan('dev'))

/*app.use(bodyParser.json())
app.use(bodyParser.urlconnect({extended: true}))*/

app.get('/', function(request, response){

    response.status(200).send('It works !')
})

app.get('/test', (request, response)=>{

    response.status(200).json('It works/test !')
})

app.post('/test', (request, response)=>{

    console.log(request.body)
   // response.status(200).json('data receive !')
   const {name} = request.body
   if(!name){
       return response.status(500).json('data not receive')
   }
   return  response.status(200).json(`It works/test  ${name}!`)
})


//app.put()
app.use('/todos', todoRouter)

const port = 4500
app.listen(port, function(){

    console.log(`'Server is listening on http://localhost:${port}`)
})





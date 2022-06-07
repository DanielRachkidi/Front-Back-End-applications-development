

const express = require('express')

const Router = express.Router()

const todos = [ {id:1, title:'buy the milk'}, {id:2, title:'rent a car'}, {id:3, title:'feed the cat'} ] 

Router.get('/', function(request, response){

    response.status(200).json(['zelloods'])
})

Router.post('/', (req, res)=>{

   /* console.log("body: ", req.body)*/
   
    const {todo} = req.body
    todos.push(todo)

    res.status(200).json(todo)
})

Router.put('/:index', (request, response) => {
 /* var id = todos // retrieve the id parameter value
  if (todos[id - 1]){
    todos[id - 1] = request.body;
    response.status(204).send();
  }else{
    response.status(404, 'The task is not found').json();
  }*/

  const {index} = request.params 
  //const{test} = request.query
  console.log(index) //test)
});


/*Router.delete('/', (req, res)=>{

    
    const {todo} = req.body

     todos.pop(todo)
 
     res.status(200).json(todo)

     const userIndex = getUserIndex(req.body)

     if (userIndex === -1) return res.status(404).json({})
    
     users.splice(userIndex, 1)
     res.json(users)
    // req.services.feedService.removeItem(req.params.id, ajaxUtil.getResponseFn(res));


 })*/

 Router.delete('/:index', (req, res) => {
  const {index} = req.params 
  const todo = req.body 
  todos[index] = todo; 
  
    if (index === -1) return res.status(404).json({})
  
    todos.splice(index, 1)
    console.log(todo)
  return res.json('The id been Deleted')
  })

module.exports = Router
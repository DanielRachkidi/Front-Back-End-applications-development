

/*const a1 = document.querySelector('#a1')
a1.addEventListener('click', function(){
    console.log('click on A1')
})*/

const a1 = document.querySelector('#a1')
const a2 = document.querySelector('#a2')
const a3 = document.querySelector('#a3')
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
const c1 = document.querySelector('#c1')
const c2 = document.querySelector('#c2')
const c3 = document.querySelector('#c3')



const element =['X', 'O']
let winner = false
let current_player = 0

const validationLine = (el1, el2, el3) => {
    
    let valid = false
    if (el1.innerHTML != '' && el2.innerHTML != '' && el3.innerHTML != '' && el1.innerHTML === el2.innerHTML && el2.innerHTML === el3.innerHTML){
        valid = true
 
        
    }
   
    
    return valid
}

const cells = document.querySelectorAll('.cell')
cells.forEach(cell =>{
    cell.addEventListener('click', (e) => {
        e.target.innerHTML = element[current_player]
        if(validationLine(a1, a2, a3)){
           
            console.log(winner)
            winner = true
        }

        if(validationLine(b1, b2, b3)){
            console.log(winner)
            winner = true
        }
        else if(validationLine(c1, c2, c3)){
            console.log(winner)
            winner = true
        }
       else if(validationLine(a1, b2, c3)){
            console.log(winner)
            winner = true
        }
        else if(validationLine(c1, b2, c3)){
            console.log(winner)
            winner = true
        }
        else if(validationLine(a1, b1, c1)){
            console.log(winner)
            winner = true
        }
        else if(validationLine(a2, b2, c2)){
            console.log(winner)
            winner = true
        }
        else if(validationLine(a3, b3, c3)){
            console.log(winner)
            winner = true
        }
       

        if(winner){
            let msg = document.querySelector('#msg')
            msg.innerHTML = ' The winner is Player' + (current_player + 1)
            msg.styles.display = "contents"

        }

        if(current_player == 0){
            current_player = 1
        }else {
            current_player = 0
        }

    })
})

function handleRestartGame() {
    winner = false;
    current_player = 1;
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");

    let msg = document.querySelector('#msg')
    msg.innerHTML =  ""
}

document.querySelector('.restart').addEventListener('click', handleRestartGame);
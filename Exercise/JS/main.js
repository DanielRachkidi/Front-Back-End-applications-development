
/*
const a1 = document.querySelector('.square')
a1.addEventListener('click', function(){
    console.log('hello world')
    a1.style.display = 'none'
})
*/


       const square = document.querySelector(".square");
        square.addEventListener("click",function(){
            console.log('hello world')

            
              if (document.querySelector('.square').style.visibility = 'hidden')
              {
              
                setTimeout("document.querySelector('.square').style.visibility = 'visible'", 1000);
             }
            

            
            const i = Math.floor(Math.random()*700)+1;
            const j = Math.floor(Math.random()*700)+1;
            square.style.left = i+"px";
            square.style.top = j+"px";

            

        })

     

/*
const a1 = document.querySelector('div')
a1.addEventListener('click', function(){
    console.log('hello world')
    a1.style.display = 'none'
})
*/



        const square = document.querySelector("div");
        square.addEventListener("click",function(){
            console.log('hello world')
            const i = Math.floor(Math.random()*700)+1;
            const j = Math.floor(Math.random()*700)+1;
            square.style.left = i+"px";
            square.style.top = j+"px";

        })
        
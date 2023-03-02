const form1 = document.getElementById("form1")
const form2 = document.getElementById("form2")
const form3 = document.getElementById("form3")
const next1 = document.getElementById("next1")
const back1 = document.getElementById("back1")
const next2 = document.getElementById("next2")
const submit = document.getElementById("submit")
const back3 = document.getElementById("back3")
const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")
const span3 = document.getElementById("span3")
const n = document.getElementById("name")
next1.addEventListener('click' ,function(){
form2.style.left ="20px"
form1.style.left ="-500px"
span2.style.backgroundColor = " rgb(55, 9, 141)"

})

back1.addEventListener('click' ,function(){

   
    form1.style.left ="20px"
    form2.style.left ="-500px"
    span2.style.backgroundColor = " transparent"

    
    })

next2.addEventListener('click' ,function(){
    span3.style.backgroundColor = " rgb(55, 9, 141)"

    form2.style.left ="-500px"
form3.style.right ="20px"

})
back3.addEventListener('click' ,function(){
    form3.style.right ="-500px"
form2.style.left ="20px"
span3.style.backgroundColor = " transparent"

})
submit.addEventListener('click' ,function(){

let poster = document.querySelector(".poster")
poster.classList.add("show")

setTimeout(() => {
    poster.classList.remove("show")

}, 3000);

let container =  document.getElementById('container')
let value = n.value
 container.innerHTML =''
 container.style.height= 'auto'
 container.style.padding ="8px"
 
 container.innerHTML =`
 <div class="mm">
 
 thanks sir ${value} for registeration
 </div>
 
 `

})
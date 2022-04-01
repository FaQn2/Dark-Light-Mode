window.addEventListener("load",function(){

 let modo=document.getElementById("modo");
let body=document.body;
//let button =document.querySelector(".lightdark")
modo.addEventListener("click", function(){
    let val=body.classList.toggle("dark")
    localStorage.setItem("modo",val)
})

let valor=localStorage.getItem("modo")

if (valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
} 

});
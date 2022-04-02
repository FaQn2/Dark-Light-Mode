window.addEventListener("load",function(){

    let toggle=document.getElementById("toggle");
    let body=document.body;
    //let button =document.querySelector(".lightdark")
    toggle.addEventListener("click", function(){
        let val=body.classList.toggle("dark")
        localStorage.setItem("toggle",val)
    })
    
    let valor=localStorage.getItem("toggle")
    
    if (valor=="true") {
        body.classList.add("dark")
    } else {
        body.classList.remove("dark")
    } 

});
var a=document.getElementById("y");
var b=document.getElementById("x");
const span=document.createElement(span);
a.addEventListener("input",function(e){
    
    
    
        if(a.value.length>2){
        a.value=a.value.substring(0,2);}
        
     document.querySelector("z").append(`${a.value.length}/2`);
     
     
    
})


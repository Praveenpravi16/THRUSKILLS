let a=document.getElementById("y");

document.getElementById("z").addEventListener("click",function(){
    if(a.value<=0){
        alert("the number should be greater than zero")
        return false;
    }
    a.value=Number(a.value)-1;
    
})

document.getElementById("a").addEventListener("click",function(){
    a.value=Number(a.value)+1;
    console.log(a.value);
})

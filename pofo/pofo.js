let username=document.getElementById('user');
let password=document.getElementById('password');

document.getElementById("myAnchor").addEventListener("click",function(){
 if(username.value==="praveencezar" && password.value==="praveen"){
    document.getElementById("myAnchor").setAttribute("href", "home.html"); 
 }
 else{
     alert("credentials is incorrect")
     if(alert=="credentials is incorrect"){
         alert("please enter correct username or password")
     }
 }
})
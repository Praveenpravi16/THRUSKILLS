

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//   slideshow script



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



// to show the contents of categories

var c=document.getElementById("myDIV");
var dots=document.getElementById("dots");
var slideshow=document.getElementById("slideshow-container");
var cat=document.getElementById("categories")
c.addEventListener("click",function(){
cat.style.display="block";
slideshow.style.display="none";
dots.style.display="none";
r.style.display="none"
})

var home=document.getElementById("home");
home.addEventListener("click",function(){
  slideshow.style.display="block";
  dots.style.display="block";
  cat.style.display="none";
  r.style.display="none"
})


let e=document.getElementById("register");
let r=document.getElementById("enroll")
e.addEventListener("click",function(){
 
  slideshow.style.display="none";
dots.style.display="none";
r.style.display="block";
cat.style.display="none";
console.log(e)

})



  
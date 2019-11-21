var i = 0;
var txt = '<p>Smart and Creative Computer Science Student</p>'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector('.m').style.display= 'block';
  } else {
    document.querySelector('.m').style.display = 'none';
}});

//Get the button:


// When the user clicks on the button, scroll to the top of the document
//Get the button:
mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, hide the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "none";
  } else {
    mybutton.style.display = "block";
  }
}

//When the user clicks on the button, scroll to the about part of the document.
//takes to projects
function topFunction() {
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame(){
        if(pos>=630){
            clearInterval(id);
        }else{
            pos+=5;
            document.body.scrollTop=pos; // For Safari
            document.documentElement.scrollTop=pos; // For Chrome, Firefox, IE and Opera
        }
    }
}
//takes to about
function topFunction2() {
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame(){
        if(pos>=1277){
            element.scrollIntoView(true);
            clearInterval(id);
        }else{
            pos+=5;
            document.body.scrollTop=pos; // For Safari
            document.documentElement.scrollTop=pos; // For Chrome, Firefox, IE and Opera
        }
    }
}
//takes to contact links.
function topFunction3() {
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame(){
        if(pos>=1700){
            element.scrollIntoView(true);
            clearInterval(id);
        }else{
            pos+=5;
            document.body.scrollTop=pos; // For Safari
            document.documentElement.scrollTop=pos; // For Chrome, Firefox, IE and Opera
        }
    }
  
}

//the element variable is not found. it should be set to some element from index.html.
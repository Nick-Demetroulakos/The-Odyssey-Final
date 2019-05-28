/*learned on W3schools (includes stuff in CSS under navbar and adhesive)*/
window.onscroll = function() {stickyBar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("adhesive")
    /*If the y positon of the nav bar is less than or equal to the value of var sticky,
    then the class adhesive is added to navbar, changing it's postion to fixed, such that it
    moves with the page*/
  } else {
    navbar.classList.remove("adhesive");
  }
}
/*Miles McCain helped with trouble shooting for the below function*/
/*Learned about this here:http://www.robertprice.co.uk/robblog/using-jquery-to-scroll-to-an-element/*/
function animatedScroll(place) {
  $("html").animate({
    /*grabs the entire code, and asks for an animate. Creates an object by grabbing the place (the id specified above) and then executing
    an offsets it from the top by the height of the navbar and 100 extra pixels*/
    scrollTop: ($(place).offset().top-($("#navbar").height()+100))
    },500);
  }

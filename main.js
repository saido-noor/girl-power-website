const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if(hamburger) {
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}




// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
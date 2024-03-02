// Website Tab Handler
// Define pages
var mnPage = document.getElementById("mainPage");
var prPage = document.getElementById("projectsPage");
var soPage = document.getElementById("socialsPage");
var stPage = document.getElementById("sitesPage");

// Define buttons
var mnBtn = document.getElementById("mainBtn")
var prBtn = document.getElementById("projectsBtn")
var soBtn = document.getElementById("socialsBtn")
var stBtn = document.getElementById("sitesBtn")
var blBtn = document.getElementById("blogBtn")


let mobile;

// Main Page
function mainPage() {
  mnPage.style.display = "block";
  prPage.style.display = "none";
  soPage.style.display = "none";
  stPage.style.display = "none";
}

        // Projects Page
function projectsPage() {
  mnPage.style.display = "none";
  prPage.style.display = "block";
  soPage.style.display = "none";
  stPage.style.display = "none";
}
        
        // Socials Page
function socialsPage() {
  mnPage.style.display = "none";
  prPage.style.display = "none";
  soPage.style.display = "block";
  stPage.style.display = "none";
}

// Sites Page
function sitesPage() {
  mnPage.style.display = "none";
  prPage.style.display = "none";
  soPage.style.display = "none";
  stPage.style.display = "block";
}

// Mobile

// Detect Mobile
// bugfix: mobile was alredy declared
function mobileCheck() {
  if(navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Samsung/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
      mobile = true;
  }
}

// Switch to Mobile mode
function mobileMode(mobile) {
  if(mobile == true) {
    var navbar = document.getElementById("nav");
    navbar.style.fontSize = "80%"
  }
}

mobileCheck();
mobileMode(mobile);


window.onscroll = function () { stickyFunction() };
window.onload = function(){getSection("home.html")}
var header = document.getElementsByClassName("menu-header")[0];
var sticky = header.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    document.getElementsByClassName("logo")[0].classList.remove("hide")
    document.getElementsByClassName("menu-bar")[0].classList.add("col-xs-8");
  } else {
    header.classList.remove("sticky");
    document.getElementsByClassName("logo")[0].classList.add("hide")
    document.getElementsByClassName("menu-bar")[0].classList.remove("col-xs-8");

  }
};

function getSection(text) {
  fetch(text)
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.getElementsByClassName("main-section")[0].innerHTML = data;
    });
}
// responsive nav
function toggleButtonMenuNav(){
  var element = document.querySelector("#container-menu");
  if(element.children[0].style.display == "block") {
      for(i=0; i < element.children[1].children.length; i++) element.children[1].children[i].classList.remove("active");
      element.children[0].style.height = "0px";
      setTimeout(function(){
          element.children[0].style.display = "none";
      }, 300);
  } else {
      element.children[0].style.display = "block";
      setTimeout(function(){
          var totalHeightofItem = 0;
          for(i=0; i < element.children[1].children.length; i++) element.children[1].children[i].classList.add("active");
          for(i=0; i < element.children[0].children.length; i++) totalHeightofItem += element.children[0].children[i].offsetHeight;
          element.children[0].style.height = totalHeightofItem + "px";
      }, 10);
  }
}

var onresize = function(){
  width = document.body.clientWidth;
  height = document.body.clientHeight;
  var element = document.querySelector("#container-menu");
  if(width > 750) {
      element.children[0].style.display = "flex";
      element.children[0].style.height = "initial";
  } else {
      if(element.children[1].children[0].classList.contains("active")){
          element.children[0].style.display = "block";
          var totalHeightofItem = 0;
          for(i=0; i < element.children[0].children.length; i++) totalHeightofItem += element.children[0].children[i].offsetHeight;
          element.children[0].style.height = totalHeightofItem + "px";
      } else {
          element.children[0].style.display = "none";
          element.children[0].style.height = "0px";
      }
  }
}
window.addEventListener("resize", onresize);

// saat user scroll 20px maka memperlihatkan button
window.onscroll = function() {scrollFunction(); navSticky()};
var navbar = document.getElementById("navbar-sticky");
var sticky = navbar.offsetTop;
function navSticky() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("sticky");
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("upButton").style.display = "block";
  } else {
      document.getElementById("upButton").style.display = "none";
  }
}


//video button
function ResumePause(element) {
  var el = element;
  var child = $(el).children();
  var video = document.getElementById("header-video");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  child.toggleClass("toggle");
}

$(document).ready(function() {
  var element = document.querySelector(".title-header-inner");
  var el = $(element);
  $('.button-bg').on('click', function() {
    if(element.classList.contains("reverse")){
      el.removeClass('reverse').addClass('running');
    } else {
      el.removeClass('running').addClass('reverse');
    }
  });
});

// Mengambil element yang ber-ID 'nav0toggle'
// Jika button element 'nav-toggle'
function responsiveMenu_button(){
	var element = document.querySelectorAll(".nav-menu ul");
	element[0].style.visibility = element[0].style.visibility == "visible" ? "hidden" : "visible";
	element[0].style.opacity = element[0].style.opacity == 1 ? 0 : 1;
}

// Sumber: https://stackoverflow.com/questions/1363650/javascript-moving-element-in-the-dom
function reorderList(){
  // script memindahkan
  var element = document.querySelectorAll("#slider-list li");
  var elementLength = element.length-1;

  element[0].classList.add('shrink');
  setTimeout(function(){
    element[0].parentNode.insertBefore(element[0],element[elementLength+1]);
    element[0].classList.remove('shrink');

  }, 300);
}

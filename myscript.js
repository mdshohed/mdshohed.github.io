var header = document.querySelector("body"); 
var cnt = 0; 
function getRandomColor() {
  // var letters = "0123456789ABCDEF";
  // var color = "#";
  // for (var i = 0; i < 6; i++) {
  //   color += letters[Math.floor(Math.random() * 16)];
  // }
  // return color;
  string = ["black"]; 
  if (cnt>100000000) cnt = 0; 
  var a = cnt%1; 
  cnt++; 
  return string[a];
}

function changeColor() {
  colorInput = getRandomColor();
  //header.style.background = colorInput;
}
setInterval("changeColor()",300);

var typed = new Typed(".typed", {
  strings: ["It's Shohedul Islam"],
  typeSpeed: 100, 
  backSpeed: 60, 
  loop: true 
}); 
var typed = new Typed(".typed2",{
  strings: ["Competitive Programmer"],
  typeSpeed: 100, 
  backSpeed: 60, 
  loop: true 
}); 
var typed = new Typed(".typed3",{
  strings: ["CS Student"],
  typeSpeed: 100, 
  backSpeed: 60, 
  loop: true 
}); 

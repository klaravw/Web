let wat = document.getElementsByClassName("whatever")[0];
function fuckthis(){
  wat.onclick = fun;
}
window.onload = fuckthis;
let toggle = false;

function fun(){
  toggle = !toggle;
  if(toggle){
    wat.innerHTML = "wee";
  }
  else{
    wat.innerHTML = "woo";
  }
}
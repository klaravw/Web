const wat = document.getElementsByClassName("whatever")[0];
let toggle = false;
console.log(wat);
wat.onClick = function(){
  var wat = document.getElementsByClassName("whatever")[0];
  toggle = !toggle;
  if(toggle){
    wat.innerHTML = "wee";
  }
  else{
    wat.innerHTML = "woo";
  }
}
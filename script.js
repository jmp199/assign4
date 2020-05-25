var welcome ="My favorite color is";
//var demo = function () {
  //document.getElementById("demo").innerHTML = "blue";
//};
document.querySelector(".welcome").innerHTML = welcome;

var color = "purple";

  document.getElementById("myBtn").addEventListener("click", function(){
  document.getElementById("demo").innerHTML = color;
  document.getElementById("demo").style.color = "black";
});
document.getElementById("demo").addEventListener("mouseover", function(){
  document.getElementById("demo").innerHTML = color;
  document.getElementById("demo").style.color = color;
});
document.getElementById("demo").addEventListener("mouseout", function(){
  document.getElementById("demo").innerHTML = color;
  document.getElementById("demo").style.color = "black";
});

writeHTML;
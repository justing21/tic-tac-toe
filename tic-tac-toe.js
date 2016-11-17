// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function blank(){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 45)
  circle.setAttribute("cy", 45)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}

function blank2(){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 145)
  circle.setAttribute("cy", 145)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "white")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
function blank3(){
  var rectangle = document.createElementNS(namespace, "rect")
  rectangle.setAttribute("x", 10)
  rectangle.setAttribute("y", 110)
  rectangle.setAttribute("height", 70)
  rectangle.setAttribute("width", 70)
  rectangle.setAttribute("fill", "blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rectangle)
}
function blank4(){
  var rectangle = document.createElementNS(namespace, "rect")
  rectangle.setAttribute("x", 210)
  rectangle.setAttribute("y", 210)
  rectangle.setAttribute("height", 70)
  rectangle.setAttribute("width", 70)
  rectangle.setAttribute("fill", "blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rectangle)
}

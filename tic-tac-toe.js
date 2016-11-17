// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
  var turn = "player1"
  function blank(){
  if(turn=="player1"){
    var rectangle = document.createElementNS(namespace, "rect")
    rectangle.setAttribute("x", 10)
    rectangle.setAttribute("y", 10)
    rectangle.setAttribute("height", 70)
    rectangle.setAttribute("width", 70)
    rectangle.setAttribute("fill", "white")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rectangle)
    turn="player2"
  }else{
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 10)
    circle.setAttribute("cy", 10)
    circle.setAttribute("r", 70)
    circle.setAttribute("fill", "orange")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
    turn="player1"
 }

    var rectangle = document.createElementNS(namespace, "rect")
    rectangle.setAttribute("x", 10)
    rectangle.setAttribute("y", 10)
    rectangle.setAttribute("height", 70)
    rectangle.setAttribute("width", 70)
    rectangle.setAttribute("fill", "white")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rectangle)
}
function blank2(){
    var rectangle = document.createElementNS(namespace, "rect")
    rectangle.setAttribute("x", 110)
    rectangle.setAttribute("y", 10)
    rectangle.setAttribute("height", 70)
    rectangle.setAttribute("width", 70)
    rectangle.setAttribute("fill", "white")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rectangle)
}
function blank3(){
    var rectangle = document.createElementNS(namespace, "rect")
    rectangle.setAttribute("x", 210)
    rectangle.setAttribute("y", 10)
    rectangle.setAttribute("height", 70)
    rectangle.setAttribute("width", 70)
    rectangle.setAttribute("fill", "white")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rectangle)
}

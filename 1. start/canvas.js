// define
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// blue rectangle
context.fillStyle = "blue";
context.fillRect(10, 40, 30, 70); // x, y, width, height

// yellow rectangle
context.fillStyle = "#ffff00";
context.fillRect(50, 30, 60, 30);
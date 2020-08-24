window.onload = function() {
    // define
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.beginPath(); // reset the context state
    context.strokeStyle = "#ff0000"; // color of the line
    context.lineWidth = 10; // thickness of the line
    context.moveTo(30, 70); // moveTo(x, y) -> starting point of the line
    context.lineTo(130, 70); // lineTo(x, y) -> end point of the line
    context.stroke(); // draw the line
}
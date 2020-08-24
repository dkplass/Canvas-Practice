window.onload = function() {
    // define
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.beginPath(); // reset the context state
    context.moveTo(30, 30); // moveTo(x, y) -> starting point of the line
    context.lineTo(80, 80); // lineTo(x, y) -> end point of the line
    context.lineTo(130, 30);
    context.lineTo(180, 80);
    context.stroke(); // draw the line

}
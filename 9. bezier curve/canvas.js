window.onload = function () {
    // define
    const canvas = document.getElementById("canvas");
    
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");


    // cp1x, cp1y, cp2x, cp2y, x, y
    context.beginPath();
    context.moveTo(150, 20);
    context.bezierCurveTo(20, 100, 200, 100, 200, 20);
    context.stroke();
}
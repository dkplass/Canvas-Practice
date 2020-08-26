window.onload = function () {
    // define
    const canvas = document.getElementById("canvas");
    
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");


    // x, y, r, sAngle, eAngle, counterclockwise
    context.beginPath();
    context.arc(100, 75, 50, 0, 2*Math.PI);
    context.stroke();
}
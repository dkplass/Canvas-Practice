window.onload = function () {
    // define
    const canvas = document.getElementById("canvas");
    
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");


    // cpx, cpy, x, y
    context.beginPath();
    context.moveTo(20, 20);
    context.quadraticCurveTo(20, 100, 200, 20);
    context.stroke();
}
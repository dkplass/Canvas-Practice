window.onload = function () {
    // define
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    /*
    shadow attribute on canvas
    - shadowColor
    - shadowOffsetX
    - shadowOffsetY
    - shadowBlur
    */

    context.beginPath();
    context.strokeStyle = "#ff0000";
    context.lineWidth = 20;
    context.shadowColor = "#000000"
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 5;
    context.moveTo(100, 60);
    context.lineTo(200, 60);
    context.stroke();
}
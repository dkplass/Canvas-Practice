window.onload = function() {
    // define
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    /*
    line join -> context.lineJoin = "miter|bevel|round";
    - miter -> default
    - bevel
    - round
    */

    // First line
    context.beginPath();
    context.lineWidth = 20;
    context.lineJoin = "miter";
    context.moveTo(30, 30);
    context.lineTo(130, 30);
    context.lineTo(130, 130);
    context.lineTo(30, 130);
    context.lineTo(30, 230);
    context.stroke();

    // First line
    context.beginPath();
    context.lineWidth = 20;
    context.lineJoin = "bevel";
    context.moveTo(60, 60);
    context.lineTo(160, 60);
    context.lineTo(160, 160);
    context.lineTo(60, 160);
    context.lineTo(60, 260);
    context.stroke();
}
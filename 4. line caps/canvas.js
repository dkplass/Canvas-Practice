window.onload = function() {
    // define
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    /*
    line caps -> context.lineCap = "";
    - butt -> default
    - round
    - square
    */

    // First line
    context.beginPath();
    context.lineCap = "butt";
    context.strokeStyle = "#ff0000";
    context.lineWidth = 10;
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.stroke();

    // Second line
    context.beginPath();
    context.lineCap = "round";
    context.strokeStyle = "#0000ff";
    context.lineWidth = 10;
    context.moveTo(100, 125);
    context.lineTo(300, 125);
    context.stroke();

    // Third line
    context.beginPath();
    context.lineCap = "square";
    context.strokeStyle = "#00ff00";
    context.lineWidth = 10;
    context.moveTo(100, 150);
    context.lineTo(300, 150);
    context.stroke();
}
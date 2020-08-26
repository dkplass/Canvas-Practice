window.onload = function () {
    // define
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.strokeStyle = "#ff0000";
    context.lineWidth = 10;
    context.moveTo(20, 40);
    context.lineTo(80, 40);
    context.lineTo(30, 100);
    context.lineTo(90, 100);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "#0000ff";
    context.lineWidth = 10;
    context.moveTo(180, 40);
    context.lineTo(120, 40);
    context.lineTo(170, 100);
    context.lineTo(110, 100);
    context.stroke();
}
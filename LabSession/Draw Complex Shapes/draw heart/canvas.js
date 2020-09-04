window.onload = function () {
    // define
    const canvas = document.getElementById("canvas");
    
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");

    // -- draw start --
    drawBezierCurve(430, 130, 470, 10, 670, 10, 670, 180);
    drawQuadraticCurve(670, 180, 670, 380, 430, 520);
    drawBezierCurve(430, 130, 400, 10, 190, 10, 190, 180);
    drawQuadraticCurve(190, 180, 190, 380 ,430, 520);
    // -- draw end --

    function drawBezierCurve(startX, startY, controlPointX1, controlPointY1, controlPointX2, controlPointY2, endX, endY, strokeColor, lineWidth) {
        context.strokeStyle = strokeColor || "#ff0000";
        context.lineWidth = lineWidth || 2;
        context.beginPath();
        context.moveTo(startX, startY);
        context.bezierCurveTo(controlPointX1, controlPointY1, controlPointX2, controlPointY2, endX, endY);
        context.stroke();
    }

    function drawQuadraticCurve(startX, startY, controlPointX, controlPointY, endX, endY, strokeColor, lineWidth) {
        context.strokeStyle = strokeColor || "#ff0000";
        context.lineWidth = lineWidth || 2;
        context.beginPath();
        context.moveTo(startX, startY);
        context.quadraticCurveTo(controlPointX, controlPointY, endX, endY);
        context.stroke();
    }
}
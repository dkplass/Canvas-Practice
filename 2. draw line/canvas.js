window.onload = function() {
    // define
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.beginPath(); // reset the context state
    context.moveTo(); // moveTo(x, y) -> starting point of line
}
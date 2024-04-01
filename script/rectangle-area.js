
function calculateRectangleArea(){
    const rectangleLength =parseFloat(document.getElementById('rectangle-length').value);
    const rectangleWidth =parseFloat(document.getElementById('rectangle-width').value);
    document.getElementById('rectangle-area').innerText = rectangleLength * rectangleWidth;
    document.getElementById('Area calculation').innerText = `Area of a rectangle = ${rectangleLength * rectangleWidth} cm²`;
}

function calculateRectangleArea(){
    const rectangleLength =parseFloat(document.getElementById('rectangle-length').value);
    const rectangleWidth =parseFloat(document.getElementById('rectangle-width').value);
    document.getElementById('rectangle-area').innerText = `${rectangleLength * rectangleWidth} cm²`;
    document.getElementById('Area-Calculation').innerText = `Area of a rectangle = ${rectangleLength * rectangleWidth} cm²`;

    if ( isNaN(rectangleLength) || isNaN(rectangleWidth)){
        document.getElementById('Area-Calculation').innerText = `Please enter a valid number`;
        document.getElementById('rectangle-area').innerText = `Please enter a valid number`;
    }
}

function calculateTriangleArea() {
    const triangleBaseInput = parseFloat(document.getElementById('triangle-base').value);
    const triangleHeightInput = parseFloat(document.getElementById('triangle-height').value);
    document.getElementById('triangle-area').innerText = `${0.5 * triangleBaseInput * triangleHeightInput} cm²`;
    document.getElementById('Area-Calculation').innerText = `Area of a triangle = ${0.5 * triangleBaseInput * triangleHeightInput} cm²`;

    if ( isNaN(triangleBaseInput) || isNaN(triangleHeightInput)){
        document.getElementById('Area-Calculation').innerText = `Please enter a valid number`;
        document.getElementById('triangle-area').innerText = `Please enter a valid number`;
    }
}
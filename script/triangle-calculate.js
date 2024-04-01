
function calculateTriangleArea() {
    const triangleBaseInput = parseFloat(document.getElementById('triangle-base').value);
    const triangleHeightInput = parseFloat(document.getElementById('triangle-height').value);
    document.getElementById('triangle-area').innerText = 0.5 * triangleBaseInput * triangleHeightInput;
    document.getElementById('Area calculation').innerText = `Area of a triangle = ${0.5 * triangleBaseInput * triangleHeightInput} cm²`;
}
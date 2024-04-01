function calculateParallelogramArea() {
    const parallelogramBase = parseFloat(document.getElementById('parallelogram-base').value);
    const parallelogramHeight = parseFloat(document.getElementById('parallelogram-height').value);
    document.getElementById('parallelogram-area').innerText = `${parallelogramBase * parallelogramHeight} cm²`;

    document.getElementById('Area-Calculation').innerText = `Area of a parallelogram = ${parallelogramBase * parallelogramHeight} cm²`;

    if ( isNaN(parallelogramBase) || isNaN(parallelogramHeight)){
        document.getElementById('Area-Calculation').innerText = `Please enter a valid number`;
        document.getElementById('parallelogram-area').innerText = `Please enter a valid number`;
    }
}
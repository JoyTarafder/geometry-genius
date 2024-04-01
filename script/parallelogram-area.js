function calculateParallelogramArea() {
    const parallelogramBase = parseFloat(document.getElementById('parallelogram-base').value);
    const parallelogramHeight = parseFloat(document.getElementById('parallelogram-height').value);
    document.getElementById('parallelogram-area').innerText = parallelogramBase * parallelogramHeight;

    document.getElementById('Area-Calculation').innerText = `Area of a parallelogram = ${parallelogramBase * parallelogramHeight} cm²`;
}
function calculateRhombusArea(){
    const rhombusBase = parseFloat(document.getElementById('rhombus-base').value);
    const rhombusHeight = parseFloat(document.getElementById('rhombus-height').value);
    document.getElementById('rhombus-area').innerText = rhombusBase * rhombusHeight;
    document.getElementById('Area-Calculation').innerText = `Area of a rhombus = ${rhombusBase * rhombusHeight} cm²`;

    if (isNaN(rhombusBase) || isNaN(rhombusHeight)){
        document.getElementById('Area-Calculation').innerText = `Please enter a valid number`;
        document.getElementById('rhombus-area').innerText = `Please enter a valid number`;
    }
}
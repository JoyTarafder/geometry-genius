function calculateRhombusArea(){
    const rhombusBase = document.getElementById('rhombus-base').value;
    const rhombusHeight = document.getElementById('rhombus-height').value;
    document.getElementById('rhombus-area').innerText = rhombusBase * rhombusHeight;
    document.getElementById('Area-Calculation').innerText = `Area of a rhombus = ${rhombusBase * rhombusHeight} cm²`;
}
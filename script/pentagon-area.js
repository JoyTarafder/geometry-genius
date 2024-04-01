
function calculatePentagonArea() {
  const pentagonPerimeter = parseFloat(document.getElementById('pentagon-perimeter').value);
  const pentagonApothem = parseFloat(document.getElementById('pentagon-apothem').value);

    document.getElementById('pentagon-area').innerText = `${0.5 * pentagonPerimeter * pentagonApothem} cm²`;
    document.getElementById('Area-Calculation').innerText = `Area of a pentagon = ${0.5 * pentagonPerimeter * pentagonApothem} cm²`;

    if ( isNaN(pentagonPerimeter) || isNaN(pentagonApothem)){
        document.getElementById('Area-Calculation').innerText = `Please enter a valid number`;
        document.getElementById('pentagon-area').innerText = `Please enter a valid number`;
    }
}
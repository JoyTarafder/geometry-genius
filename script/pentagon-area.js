
function calculatePentagonArea() {
  const pentagonPerimeter = parseFloat(document.getElementById('pentagon-perimeter').value);
  const pentagonApothem = parseFloat(document.getElementById('pentagon-apothem').value);

    document.getElementById('pentagon-area').innerText = 0.5 * pentagonPerimeter * pentagonApothem;
    document.getElementById('Area calculation').innerText = `Area of a pentagon = ${0.5 * pentagonPerimeter * pentagonApothem} cm²`;
}
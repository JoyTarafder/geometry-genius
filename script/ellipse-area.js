function calculateEllipseArea() {
  const ellipseMajorRadius = parseFloat(document.getElementById("ellipse-major-radius").value);
  const ellipseMinorRadius = parseFloat(document.getElementById("ellipse-minor-radius").value);
  document.getElementById("ellipse-area").innerText = Math.PI.toFixed(3) * ellipseMajorRadius * ellipseMinorRadius;
    document.getElementById("Area-Calculation").innerText = `Area of an ellipse = ${Math.PI.toFixed(3) * ellipseMajorRadius * ellipseMinorRadius} cm²`;
}
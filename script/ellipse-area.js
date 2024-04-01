function calculateEllipseArea() {
  const ellipseMajorRadius = parseFloat(document.getElementById("ellipse-major-radius").value);
  const ellipseMinorRadius = parseFloat(document.getElementById("ellipse-minor-radius").value);
  document.getElementById("ellipse-area").innerText = Math.PI.toFixed(2) * ellipseMajorRadius * ellipseMinorRadius;
    document.getElementById("Area calculation").innerText = `Area of an ellipse = ${Math.PI.toFixed(2) * ellipseMajorRadius * ellipseMinorRadius} cm²`;
}
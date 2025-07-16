function computeBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const result = document.getElementById('bmi-result');
  const condition = document.getElementById('bmi-condition');

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.value = "";
    condition.textContent = "Weight Condition: Please enter valid values.";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  result.value = bmi.toFixed(10);

  let weightStatus = "";
  if (bmi < 18.5) {
    weightStatus = "Underweight";
  } else if (bmi < 24.9) {
    weightStatus = "Normal weight";
  } else if (bmi < 29.9) {
    weightStatus = "Overweight";
  } else {
    weightStatus = "Obesity";
  }

  condition.textContent = `Weight Condition: ${weightStatus}`;
}

const form = document.querySelector('form');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const heightCm = parseFloat(heightInput.value);
  const weightKg = parseFloat(weightInput.value);

  if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
    resultsDiv.innerHTML = '<p>Please enter valid positive numbers for height and weight.</p>';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  let category = '';

  if (bmi < 18.6) {
    category = 'Under Weight';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = 'Normal Range';
  } else {
    category = 'Overweight';
  }

  resultsDiv.innerHTML = `<p>Your BMI is ${bmi.toFixed(2)} (${category}).</p>`;
});
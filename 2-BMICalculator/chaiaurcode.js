const form = document.querySelector('form');
form.addEventListener('submit', function (e){
  e.preventDefault();
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  
  if (height === '' || height<0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`;
  } else if (weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight /((height*height)/10000)).toFixed(2)
    // BMI Calculation: weight (kg) / [height (m)]^2, show the result with 2 decimal places
    results.innerHTML = `<span>Your BMI is ${bmi} </span>`;
  }
}); 

// // Show weight guide
// const weightGuide = document.querySelector('#weight-guide');
// weightGuide.innerHTML=`
//   <h3>Weight Guide</h3>
//   <ul>
//     <li>Under Weight : BMI is less than 18.6</li>
//     <li>Normal Range : BMI is 18.6 to 24.9</li>
//     <li>Overweight : BMI is 25 or more</li>
//   </ul>
// `;  
// // BMI Categories: Under Weight (BMI < 18.6), Normal Range (18.6 <= BMI <= 24.9), Overweight (BMI >= 25)
// const bmiCategories = {
//   underweight: { min: 0, max: 18.5 },
//   normal: { min: 18.6, max: 24.9 },
//   overweight: { min: 25, max: Infinity }
// };      
// form.addEventListener('submit', function (e){
//   e.preventDefault();
  
//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');
  
//   if (height === '' || height<0 || isNaN(height)){
//     results.innerHTML=`Please give a valid height ${height}`;
//   } else if (weight === '' || weight<0 || isNaN(weight)){
//     results.innerHTML=`Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight /((height*height)/10000)).toFixed(2)
//     let category = '';
//     if (bmi < bmiCategories.underweight.max) {
//       category = 'Under Weight';
//     } else if (bmi >= bmiCategories.normal.min && bmi <= bmiCategories.normal.max) {
//       category = 'Normal Range';
//     } else {
//       category = 'Overweight';
//     }
//     results.innerHTML = `<span>Your BMI is ${bmi} (${category})</span>`;
//   }
// });   // End of form submit event listener  

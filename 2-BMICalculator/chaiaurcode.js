const form = documet.querySelector('form');
//this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
     e.preventDefault();
     const height = parseInt(document.querySelector('#height').value)
     //required to parseInt for Integer value
     const weight = parseInt(document.querySelector('#weight').value)
     const results = document.querySelector('#results')
/     //not required to parseInt because results is variable
   
//     if(height===''|| height<0||isNaN(height)){
//         results.innerHTML=`Please five a valid height ${height}`;
//     } else if(weight===''|| weight<0||isNaN(weight)){
//         results.innerHTML=`Please five a valid height ${weight}`;
//     } else{
//         const bmi = (weight / ((height*height)/10000)).toFixed(2)
//         //show th e result
//         results.innerHTML=`<span>${bmi}</span>`;

//     }
    
})

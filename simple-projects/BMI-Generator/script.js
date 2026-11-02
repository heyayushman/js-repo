const form = document.querySelector('form');
const remarks = document.querySelector('.remarks');

//? this is will give empty value, we need to create variable inside form
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const result = document.querySelector('#result');



    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please provide a valid height';
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please provide a valid weight';
    }else {
        const bmi = (weight / (height / 100) ** 2).toFixed(2);

        result.innerHTML = bmi


        if(bmi < 18.5){
            remarks.innerHTML = 'Under weight';
        }else if(bmi >= 18.5 && bmi <= 24.9){
            remarks.innerHTML = 'Healthy weight';
        }else if(bmi >= 25.0 && bmi <= 29.9){
            remarks.innerHTML = 'Overweight'
        }
        else if(bmi >= 30.0 && bmi <= 34.9 ){
            remarks.innerHTML = 'Obesity Class 1';
        }
        else if(bmi >= 35.0 && bmi <= 39.9 ){
            remarks.innerHTML = 'Obesity Class 2';
        }
    }
})
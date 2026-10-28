const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e)

    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const result = document.querySelector('#result');
    const remark = document.querySelector('.remarks');
    


    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please provide a valid height ${height}`;
        return;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please provide a valid weight ${weight}`;
    }else {
        result.innerHTML = (weight / ((height/ 100) ** 2)).toFixed(2);
    }

  

});
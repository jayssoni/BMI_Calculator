const form = document.querySelector('form')

form.addEventListener('submit', (e) =>
{
e.preventDefault();

const height = parseInt(document.querySelector('#p1').value);
const weight = parseInt(document.querySelector('#p2').value);
const result  = document.querySelector('#result');


if(height=='' || height<0 || isNaN(height))
{
    result.innerHTML = "INVALID HEIGHT!!!!"
}
else if(weight=='' ||weight<0 || isNaN(weight))
    {
        result.innerHTML = "INVALID weight!!!!"
    }
    else
    {
     const bmi = (weight / ((height*height)/10000)).toFixed(2);   

     result.innerHTML = `<span>${bmi}</span>`
    }


})
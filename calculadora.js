const h1 = document.querySelector('h1');
const form = document.querySelector ('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#pResult');


form.addEventListener ('submit', sumarInputs)

function btnOnClick () {
    let sumaInputs =input1.value + input2.value;
    pResult.innerText = "Resultado = " + sumaInputs;
}

function sumarInputs (event) {
    console.log((event));
    event.preventDefault();
    let sumaInputs =input1.value + input2.value;
    pResult.innerText = "Resultado = " + sumaInputs;
}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
parrafito1 = document.querySelector('#parrafito')
const parrafito = document.getElementsByClassName('parrafito');
//const pid = document.querySelector('.pid');
const pid = document.getElementById('pid');
const input = document.querySelector('input');
const img = document.createElement('img');



img.setAttribute('src', 'https://www.jimdo.com/static/ab2ee7b411a610479211ac292fd89ef4/5ce94/Logo_LogoExample_Header_4_ES.png');

pid.append(img);

console.log(input.value);

console.log({h1, 
    p, 
    parrafito, 
    pid,
    input,
});


input.value = 'Hola Eleuterio'
h1.innerHTML = "HOla";
p.innerTextn   = "Soy <b>parrafito </b>";
parrafito1.setAttribute( 'class', 'rojo');

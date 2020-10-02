//Variables
const caja = document.querySelector('.caja');
const container = document.querySelector('.container');
const elementos = document.querySelectorAll('.elemento');
const elementoActivo = document.querySelector('.elementoActivo');
const elementos = document.getElementById('#texto');
//const tarjeta = document.querySelector('.tarjeta');

//Funcion

elementos.forEach(function(elemento){

//Evento

elemento.addEventListener('click',elemento);


elemento.classList.add('elementoActivo');
elemento.classListremove('elementoActivo');
//elemento.reaplace('elementoActivo','elemento');

container.textContent('elemento');
elementos();

texto.innerHTML += `
    <div>
           <h2>El Salvador</h2>
            <p>"El Salvador es una pequeña nación de América Central. Es conocida por sus playas en el océano Pacífico, los sitios de surf y el paisaje montañoso. Su Ruta de las Flores es un camino serpenteante que pasa por plantaciones de café, bosques tropicales con cascadas y ciudades como Juayúa, con sus festivales gastronómicos cada fin de semana, junto con Ataco, donde hay alegres murales. La capital, San Salvador, con volcanes como un espectacular telón de fondo, tiene varios museos y el Teatro Nacional."</p>
    </div>
`

})







const declarada = document.getElementById('declarada');

declarada.addEventListener('click', functionDeclarada);

function functionDeclarada() {
    console.log('Hiciste click en la funcion declarada')
}

const anonima = document.getElementById('anonima');

anonima.addEventListener('click', function() {
    console.log ('Hiciste click en el boton con funcion anonima ')
})

const flecha = document.getElementById('flecha');

flecha.addEventListener('click', () => {
    console.log("Flechaaa")
});


function nroMagico(e) {
    e.preventDefault();

    const numeroAleatorio = Math.floor(Math.random() * 1001);
    // const numeroAleatorio = 120
    console.log(numeroAleatorio);
    const nroIngresado = Number(document.querySelector('input').value)
    console.log(nroIngresado);

    const mensaje = document.getElementById('resultado')
    console.log( (nroIngresado === numeroAleatorio))
    if (nroIngresado === numeroAleatorio) {
        mensaje.innerHTML = `<div class="p-3 mb-2 bg-success-subtle text-success-emphasis display-4">👏Felicitaciones! Encontraste el número mágico.</div>`
        console.log('adivinaste')
    } else if (nroIngresado > numeroAleatorio) {
        mensaje.innerHTML = `<div class="p-3 mb-2 bg-danger-subtle text-danger-emphasis display-4">👇El número mágico es más chico</div>`
        console.log('El numero Magico es Menor')
    } else {
        mensaje.innerHTML = `<div class="p-3 mb-2 bg-info-subtle text-info-emphasis display-4">👆El número mágico es más grande</div>`
        console.log('El numero Magico es Mayor')
    }

    formulario.reset()
}



/*******************DOM **************** */
const formulario = document.querySelector('form')
console.log(formulario)

formulario.addEventListener('submit', nroMagico)

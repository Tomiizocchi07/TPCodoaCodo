function TipoEstudiante(nombre, apellido, tipoEducacion, entradas) {
    this.nombre = nombre
    this.apellido = apellido
    this.tipoEducacion = tipoEducacion
    this.entradas = entradas
}

TipoEstudiante.prototype.cotizarEntrada = function(tipoEducacion, entradas) {
    let cantidad;
    const base = 200;

    switch(tipoEducacion){
         case '1':
              cantidad = (base * 20)/100;
              break;
         case '2':
              cantidad = (base * 50)/100;
              break;
         case '3':
              cantidad = (base * 85)/100;
              break;
    }

    return (cantidad * entradas);

}

function Interfaz() {}

Interfaz.prototype.mostrarResultado = function(total) {
    const resultado = document.querySelector('#resultado');
    // Crear un div
    const div = document.createElement('div');
    div.className = 'justify-content-md-center alert alert-primary'
    // Insertar la informacion
    div.innerHTML = `
         <p class='header'>Total a pagar: $ <span class="font-normal"> ${total} </span></p>
         `;
    resultado.appendChild(div)
}

const interfaz = new Interfaz();

const formulario = document.querySelector('#Venta-Ticket');

formulario.addEventListener('submit', e =>  {
     e.preventDefault();

     const nombre = document.querySelector('#nombre').value;

     const apellido = document.querySelector('#apellido').value

     const tipoEducacion = document.querySelector('#tipoEntrada').value;

     const cantEntradas = document.querySelector('#cantidad').value

     const resultados = document.querySelector('#resultado div');
     if(resultados != null) {
          resultados.remove();
    }

    const estudiante = new TipoEstudiante(nombre, apellido, tipoEducacion, cantEntradas);

    const cantidad = estudiante.cotizarEntrada(tipoEducacion, cantEntradas);

    interfaz.mostrarResultado(cantidad);

});

formulario.addEventListener('reset', e =>  {
    e.preventDefault();

    const resultados = document.querySelector('#resultado div');
         
    resultados.remove();
});
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombre);

// Llama a Ajax e imprime resultados
function cargarNombre(e){
    e.preventDefault();

    //Leer los campos
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    console.log(origenSeleccionado);

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    console.log(generoSeleccionado);

    const cantidad = document.getElementById('numero').value;
    console.log(cantidad);

    let url = 'https://uinames.com/api/?';

    //Si hay origen agregarlo a la URL
    if( origenSeleccionado !== '' ){
        url += `region=${origenSeleccionado}&`;
    }

    //Si hay genero agregarlo a la URL
    if( generoSeleccionado !== '' ){
        url += `gender=${generoSeleccionado}&`;
    }

    //Si hay cantidad agregarlo a la URL
    if( cantidad !== '' ){
        url += `amount=${cantidad}&`;
    }
    
    console.log(url);
}
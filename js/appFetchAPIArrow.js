document.querySelector('#generar-nombre').addEventListener('submit', cargarNombre);

// Llama a Ajax e imprime resultados
function cargarNombre(e){
    e.preventDefault();

    //Leer los campos
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    //console.log(origenSeleccionado);

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    //console.log(generoSeleccionado);

    const cantidad = document.getElementById('numero').value;
    //console.log(cantidad);

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

    //CONECTAR CON FETCH
    fetch(url)
        .then( response => response.json() )
        .then( data => {
            let html = '<h2>Nombres Generados</h2>';
            html += '<ul class="lista">';
            data.forEach( nombre => {
                html += `
                    <li>${nombre.name}</li>
                `;
            });
            html += '</ul>';
            document.querySelector('#resultado').innerHTML = html;
        })
        .catch( error => console.log(error));
}
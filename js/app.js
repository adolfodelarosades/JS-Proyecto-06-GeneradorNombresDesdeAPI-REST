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
    //console.log(url);

    //CONECTAR CON AJAX
    // 1. Inicializar XMLHTTPRequest
    const xhr = new XMLHttpRequest();

    // 2. Abrir la conexión
    xhr.open('GET', url, true);

    // 3. Recuperar datos e imprimir template
    xhr.onload = function(){
        if( this.status === 200 ){
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
            const nombres = JSON.parse(this.responseText);
            //Generar el HTML
            let htmlNombres = '<h2>Nombres Generados</h2>';
            htmlNombres += '<ul class="lista">';
            //Imprimir cada nombre
            nombres.forEach( function(nombre) {
                htmlNombres += `
                        <li>${nombre.name}</li>
                `;
            });
            htmlNombres += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }

    // 4. Enviar el Request
    xhr.send();
}
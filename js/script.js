const formulario = document.querySelector('.opciones-celulares');
const resultados = document.querySelector('#opciones');

//Opciones
const marca = document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const ram = document.querySelector('#ram');
const color = document.querySelector('#color');
const precioMin = document.querySelector('#preciomin');
const precioMax = document.querySelector('#preciomax');

let bandera = false;


const datosBusqueda = {
    marca: '',
    modelo: '',
    ram: '',
    color: '',
    preciomin: 0,
    preciomax: 0
};


//Eventos
document.addEventListener('DOMContentLoaded', llenarLista(celulares));

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    cargarModelos(e.target.value);

    filtrarCelulares();
});

modelo.addEventListener('change', e => {
    datosBusqueda.modelo = e.target.value;
    filtrarCelulares();
});

ram.addEventListener('change', e => {
    datosBusqueda.ram = e.target.value;
    filtrarCelulares();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarCelulares();
});

precioMin.addEventListener('change', e => {
    datosBusqueda.preciomin = e.target.value;
    filtrarCelulares();
});

precioMax.addEventListener('change', e => {
    datosBusqueda.preciomax = e.target.value;
    filtrarCelulares();
});

function cargarModelos(marca) {

    if (bandera) {
        bandera = false;
        modelo.removeChild(modelo.children[1]);
        modelo.removeChild(modelo.children[1]);
        console.log(marca);
    }

    celulares.forEach(celular => {
        if (celular.marca === marca) {
            const opcion = document.createElement('option');
            opcion.value = celular.modelo;
            opcion.textContent = celular.modelo;
            modelo.appendChild(opcion);
            bandera = true;

        }
    })

}

function llenarLista(celulares) {

    limpiarHTML();

    celulares.forEach(celular => {
        let lista = document.createElement('li');

        lista.textContent = `${celular.marca} - ${celular.modelo} - Ram: ${celular.ram} - Color: ${celular.color} - Precio: ${celular.precio}`;

        lista.classList.add('opcion');

        resultados.appendChild(lista);
    });

}

function limpiarHTML() {
    while (resultados.firstChild) {
        resultados.removeChild(resultados.firstChild);
    }
}

function filtrarCelulares() {
    const resultado = celulares.filter(filtrarMarca).filter(filtrarModelo).filter(filtrarRam).filter(filtrarColor).filter(filtrarPrecioMin).filter(filtrarPrecioMax);
    llenarLista(resultado);
}



function filtrarMarca(celular) {
    if (datosBusqueda.marca) {
        return celular.marca === datosBusqueda.marca;
    }
    return celular;
}

function filtrarModelo(celular) {
    if (datosBusqueda.modelo) {
        return celular.modelo === datosBusqueda.modelo;
    }
    return celular;
}

function filtrarRam(celular) {
    if (datosBusqueda.ram) {
        return celular.ram === datosBusqueda.ram;
    }
    return celular
}

function filtrarColor(celular) {
    if (datosBusqueda.color) {
        return celular.color === datosBusqueda.color;
    }
    return celular
}

function filtrarPrecioMin(celular) {
    if (datosBusqueda.preciomin) {
        return celular.precio > parseInt(datosBusqueda.preciomin);
    }
    return celular
}

function filtrarPrecioMax(celular) {
    if (datosBusqueda.preciomax) {
        return celular.precio < parseInt(datosBusqueda.preciomax);
    }
    return celular
}
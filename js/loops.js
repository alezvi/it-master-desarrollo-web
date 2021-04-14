// array, arreglo, matriz, lista, vector

// 0 : A
// 1 : l
// 2 : e

var nombre = [
    'Alejandro',  // 0
    'Ezequiel',   // 1
    'Villafane',  // 2
]

var mixto = [
    'soy un string',
    123,
    true,
    null,
    []
]

mixto.push('nuevo dato')

for (var i = 0; i < mixto.length; i++) {
    console.log( mixto[i] )
}

// 1 era - i = 0 - SI - ejecuta
// 2 da -  i = 1 - SI - ejecuta
// ...
// 10ma - i = 9 - NO

// array asociativo
var usuario = {
    primerNombre : 'Alejandro',
    segundoNombre : 'Ezequiel',
    apellido : 'Villafane',
    altura : 1.78,
    esExtranjero : false,
}

var link = '<a href="#home">...</a>'

var linksContainer = document.querySelector('.second-nav-links')

// var links = [
//     'Home',
//     'Nosotros',
//     'Productos',
//     'Contacto',
// ]

var links = [
    {
        href : '#home',
        name : 'Home',
    },
    {
        href : '#productos',
        name : 'Productos',
    },
    {
        href : '#nosotros',
        name : 'Nosotros',
    },
    {
        href : '#contacto',
        name : 'Contacto',
    },
]

for (var i = 0; i < links.length; i++) {
    linksContainer.innerHTML += '<a href="' + links[i].href + '">' + links[i].name + '</a>'
}

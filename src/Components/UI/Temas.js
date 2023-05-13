import {
fondoClaro,
contenidoClaro,
textoFondoClaro,
fondoOscuro,
contenidoOscuro,
textoFondoOscuro,



}from"./variables"

export const temaClaro = {
body: fondoClaro,
inside: contenidoClaro,
texto:  textoFondoClaro,
filter: "",
};

export const temaOscuro = {
    body: fondoOscuro,
    inside: contenidoOscuro,
    texto:  textoFondoOscuro,
    filter: "invert(100%)",
    };
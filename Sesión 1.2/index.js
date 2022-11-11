let parrafoinicial = document.getElementById("parrafoinicial");

    console.log(parrafoinicial);

    parrafoinicial.onclick = function(){
        CambiaColorAleatorio();
};

function CambiaColorAleatorio(){
    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ];

    console.log(colores[Math.floor(Math.random() * colores.length)]);
    parrafoinicial.style.color = colores[Math.floor(Math.random() * colores.length)];
}


/*
Tipos de Datos
    Var - Modificarse, scope global [No recomendado]
    let - Variable Modifiacable, scope limitado
    const - Constante no Modificable, Scope Global

Casses

    PascalCase - Nombre Clases(Primer letra mayuscula define Case)
    CamelCase - Variables, Funciones. Atributos
     Variable - parrafoinicial = 
     Función - getElementById()
        Atributo - document
    snake_case - Variables y Funciones (Phyton)
    CASE - Constantes
*/

console.log(ParrafoInicial);

parrafoinicial.onclick = function(){
    accion()
};

function accion(){
    parrafoinicial.style.color = "blue"
};
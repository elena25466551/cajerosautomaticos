let expRegNombre = /([A-Z\s?]){4,35}/gi;
let expRegEmail = /^[A-Z]+$/gi
let correo = document.getElementById('correo');
let nombre = document.getElementById('nombre');
let sexo = document.getElementById('sexo');
let evento = document.getElementById('evento');
let costoE1 = 200;
let costoE2 = 200;
let costoE3 = 200;

let suscripciones = []
suscripciones.push({nombre: "Alan Bonnet", email: "alan.bonnet@gmail.com", sexo:2,evento:3})
suscripciones.push({nombre: "Gabriela Caceres", email: "gabriela.caceres@gmail.com", sexo:1,evento:2})
function validarNombre(nombre){
    return nombre != "" && nombre.length <50 && nombre.length>1;
}
function validarCorreo(email){
    return email != "" && email.includes("@") ;
}
function existeSuscriptorAEvento(email,evento){
    for (subscriptor of suscripciones){
        if (subscriptor.email == email && subscriptor.evento == evento){
            return true;
        }return false;
    }
}
function PorcentajesPorSexo(sexo){
    if (sexo == 1){
        return 1.65;
    }else{
        return 1.35;
    }
}
function costoEvento(evento){
    switch(parseInt(evento)){
        case 1:
            return 200;
        
        case 2:
            return 250;
        
        case 3:
            return 300;

    }
}
function calcularPorcentajesPorSexo(lista,costoEvento ){
    for(subscriptor of lista){
        return `El usuario ${subscriptor.nombre} pagará: $${PorcentajesPorSexo(subscriptor.sexo)*costoEvento}` 
    }
}
function inscribirse(){
    if(validarNombre(nombre.value) && validarCorreo(correo.value))
}
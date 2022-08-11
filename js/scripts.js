/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
//Registro Modulo
let userRegister = document.getElementById('usuarior');
let contraRegister = document.getElementById('contrar');
let contraConfirm = document.getElementById('contrarConfirm');
let correoRegister = document.getElementById('emailr');
let nombreRegister = document.getElementById('nombre');
let telefonoRegister = document.getElementById('telefono');
let alertaRegister = document.getElementById('registrar')
let registros = [];

registros.push([uuid.v4(),"AlenPros","1234","Mongoliton@gmail.com"]);
registros.push([uuid.v4(),"Alancito","123","alancito@gmail.com"]);

//Iniciar Modulo
let userInit = document.getElementById('usuario');
let contraInit = document.getElementById('contra');
let alertaInit = document.getElementById('inicioSesion');
//modal
let modalIniit = document.getElementById('exampleModal');

function validarPassword(pass,passConfirm){
    return (pass == passConfirm) && (pass.length > 6);
}
function existeUsername(username){
     
    if ((typeof registros.find(usuario => usuario[1] == username)) == "object"){
        return true
    }else {return false}
    //busca en registros lo que devuelve la función usuario leído en su entrada[1] y compara con el username
    //sin espacios en blanco
}
function existeCorreo(correo){
     
    if ((typeof registros.find(usuario => usuario[1] == correo)) == "object"){
        return true
    }else {return false}
    //busca en registros lo que devuelve la función usuario leído en su entrada[1] y compara con el username
    //sin espacios en blanco
}
function validarUsername(username){
    if (existeUsername(username)){
        showAlert('info',"El nombre de usuario no puede estar vacío.","divAlert")
        return false;
    }
    if(username < 6){
        showAlert('info', 'El nombre de usuario no puede comenzar con un número',)
    }
}
function validarEmail(){
    
}
function showAlert(tipo, mensaje, divElement){
    divElement.innerHTML = `
                        <div class="alert alert-${tipo} d-flex align-items-center" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                            <div>
                                ${mensaje}
                            </div>
                        </div>
                        
                        
                        `;
    setTimeout(function(){
        divElement.innerHTML= "";
    },9000)

}
function existeCampo(array,i,divElement,claseSalida,claseDefault){
    if(array[i] == divElement.value){
        (divElement).className= claseSalida;
        setTimeout(()=>{
            (divElement).className = claseDefault;
        },9000)
    }
}
function msjExistRegister(user,divElement,divElement2){
    return `${user[1]==divElement.value?"El usuario ya existe." :""}${!(user[1]==divElement.value)?"":"<br>"}${user[3] == divElement2.value?`El correo ya existe.` :"" }`
}

let cajitaEnojada = `me-auto my-1 py-2 col-8  border border-danger border-2 rounded-end shadow`;
let cajitaDefault = `me-auto my-1 py-2 col-8  border border-dark border-2 rounded-end shadow`
function registerUser(){
    console.log(registros)
    let limite = 0;
    if (userRegister.value != "" && contraRegister.value != "" && correoRegister.value != ""){
            registros.forEach(usuario => {
            
                if (usuario[1]==userRegister.value || usuario[3] == correoRegister.value && limite==0){
                    existeCampo(usuario,1,userRegister,cajitaEnojada,cajitaDefault)
                    existeCampo(usuario,3,correoRegister,cajitaEnojada,cajitaDefault)
                    showAlert("danger",msjExistRegister(usuario,userRegister,correoRegister),alertaRegister);
                    
                        limite=1;
                        
                }
            
        })
        if (limite == 0){
            setTimeout(function(){
                registros.push([uuid.v4(),userRegister.value,contraRegister.value,correoRegister.value])
                setTimeout(function(){
                    console.log(registros)
                },2000)
            },1000)
        }
    }else{
        alertaRegister.innerHTML = `
                        <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                            <div>
                                ${userRegister.value==""? "Campo de usuario vacío":""}
                                ${!(userRegister.value=="")?"" :"<br>"}
                                ${contraRegister.value==""? "Campo de contraseña vacío":""}
                                ${!(contraRegister.value=="")?"" :"<br>"}
                                ${correoRegister.value=="" ? "Campo de correo vacío":""}
                            </div>
                        </div>
                        
                        
                        `
                        setTimeout(function(){
                            alertaRegister.innerHTML= "";
                        },9000)
    }
}
function iniciarSesion(){

}









































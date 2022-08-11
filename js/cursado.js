//Script local
        //Evento para el enter
        // let enterInput= document.querySelector('#preferencia');
        // enterInput.addEventListener('keyup', function(event){
        //     //console.log(event.which); sirve para mostrar por consola qué tecla se escucha
        //     //let texto = document.querySelector("#nombre"); // se elige el input de id nombre y luego un if que acciona f.agregar() al apretarse enter
        //     if(event.which === 13) {cursado()};   
        // })
        
        document.querySelector('#salida').style.visibility = "hidden";
        let respuesta = document.querySelector('#preferencia1');
        // let preferenciaSolo = document.querySelector('#preferencia');

        respuesta.oninput = function() {
        // if(respuesta.value == "Si" || respuesta.value == "No"){
        //     respuesta.value = respuesta.value;
        // }
        } //Simple practica de actualizacion de cosas en tiempo real
        function cursado(){
            let mensaje,clase;
            let alertHtml = `
            <div class="alert alert-${clase} d-flex align-items-center" role="alert">
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                    <div>
                        ${mensaje}
                    </div>
            </div>`;
            let salida = document.querySelector('#salida')
                if (respuesta.value == "Si"){
                    mensaje = "A cursar al aula";
                    clase = "success";

                    salida.className = "mt-4";
                    salida.innerHTML = (`
                    <div class="alert alert-${clase} d-flex align-items-center" role="alert">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                        <div>
                            ${mensaje}
                        </div>
                    </div> `);
                    document.querySelector('#salida').style.visibility = "visible";
                    
                
                }else if(respuesta.value == "No"){
                    salida.className = "mt-4";
                    clase = "success";
                    mensaje = "Enviaremos el código de cursado."
                    salida.innerHTML = (`
                    <div class="alert alert-${clase} d-flex align-items-center" role="alert">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                        <div>
                            ${mensaje}
                        </div>
                    </div> `);
                    document.querySelector('#salida').style.visibility = "visible";
                }
                else{
                    salida.className = "mt-4";
                    clase = "primary";
                    mensaje = "Opción Incorrecta."
                    salida.innerHTML = (`
                        <div class="alert alert-${clase} d-flex align-items-center" role="alert">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
                            <div>
                                ${mensaje}
                            </div>
                        </div> `);
                    document.querySelector('#salida').style.visibility = "visible";
                }
            
            
        
        }

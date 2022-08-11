        //Script local
        //Evento para el enter
        let enterInput= document.querySelector('#dineroAcobrar');
        enterInput.addEventListener('keyup', function(event){
            //console.log(event.which); sirve para mostrar por consola qué tecla se escucha
            //let texto = document.querySelector("#nombre"); // se elige el input de id nombre y luego un if que acciona f.agregar() al apretarse enter
            if(event.which === 13) calcular();   
        })
        function calcular(){
           let dineroAcobrar =  document.querySelector('#dineroAcobrar').value;
            let resultadoAcobrar;let entregaCuota;
            resultadoAcobrar = dineroAcobrar/2;
            document.querySelector('#entrega').value = resultadoAcobrar;
            entregaCuota = resultadoAcobrar/4;
            document.querySelector('#cuotas').value = entregaCuota;
            //let salida = document.querySelector('#salida');
            //salida.className = ('mx-auto w-50 my-3 text-center bg-success text-white rounded p-2')
            //salida.innerHTML=((`Dinero a cobrar $${dineroAcobrar}. <br> Entrega/s: ${resultadoAcobrar}. <br> Cuotas: ${cuotas} <br> Por cuota ${entregaCuota}`))
        }
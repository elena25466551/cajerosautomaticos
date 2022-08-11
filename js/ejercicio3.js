let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');
let salidaTiempo = document.querySelector('#salida');
function limpiarCampos(){
    // Al usar la funcion blanquea los campos
        horas.value = "";
        minutos.value = "";
        segundos.value = "";
        salidaTiempo.innerHTML = "";
}
function tiempo() {
    
 
    if ((horas.value<0 || minutos.value<0 || segundos.value<0)||!((horas.value).length < 3 && (minutos.value).length <3 && ((segundos.value).length <6 || (segundos.value >0)))) {
        salidaTiempo.innerHTML= `
            <div class="alert alert-danger d-flex align-items-center my-2 " role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <div>
                    Hora ingresada no válida.
                </div>
            </div>

        `
        } else {
            segundos.value++;
            if (segundos.value>=60) {
                while (segundos.value>=60) {
                    segundos.value=segundos.value-60;
                    minutos.value++;
                }
            }
            if (minutos.value>=60) {
                while (minutos.value>=60) {
                    minutos.value=minutos.value-60;
                    horas.value++;
                }
            }
            if (horas.value<24) {
                salidaTiempo.innerHTML = `
                <div class="alert alert-success d-flex align-items-center my-2 " role="alert">
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                    <div>
                        Son las ${(horas.value).length > 1 ? horas.value : "0"+horas.value }:${(minutos.value).length > 1 ? minutos.value : "0"+minutos.value}:${(segundos.value).length > 1 ? segundos.value : "0"+segundos.value} hs.
                    </div>
                </div>

                `
                        } else  if (horas.value>24){
                            salidaTiempo.innerHTML = `
                            <div class="alert alert-danger d-flex align-items-center my-2 " role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                                <div>
                                    Hora ingresada no válida.
                                </div>
                            </div>
                            
                            
                            `;
                        } else if (horas.value=24) {
                            horas.value=0;
                            salidaTiempo.innerHTML = `
                            <div class="alert alert-success d-flex align-items-center my-2 " role="alert">
                                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                                <div>
                                    Son las ${(horas.value).length > 1 ? horas.value : "0"+horas.value }:${(minutos.value).length > 1 ? minutos.value : "0"+minutos.value}:${(segundos.value).length > 1 ? segundos.value : "0"+segundos.value} hs.
                                </div>
                            </div>
                            `
                            
                    }
        }
}
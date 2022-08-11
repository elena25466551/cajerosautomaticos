let listaPostre = document.querySelector('#preferencia1');
function postres(){

    if (listaPostre.value.includes("sin")){
        mensaje = "Elegiste Sin Cobertura son $450.";
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
    }else if(listaPostre.value.includes("oreo")){
        mensaje = "Elegiste con cobertura de Oreo son: $480";
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
    }else if(listaPostre.value.includes("frutilla")){
        mensaje = "Elegiste con cobertura de frutilla son: $500";
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
    }else if(listaPostre.value.includes("chocolate")){
        mensaje = "Elegiste con cobertura de chocolate son: $520";
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
    }else if(listaPostre.value.includes("caramelo")){
        mensaje = "Elegiste con cobertura de caramelo son: $550";
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
    }else{
        mensaje = "No poseemos esa cobertura";
        clase = "danger";

        salida.className = "mt-4";
        salida.innerHTML = (`
        <div class="alert alert-${clase} d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
                ${mensaje}
            </div>
        </div> `);
        document.querySelector('#salida').style.visibility = "visible";
    }
}
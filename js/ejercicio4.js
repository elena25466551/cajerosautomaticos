let valor1 = document.querySelector('#valor1');
let valor2 = document.querySelector('#valor2');
let valor3 = document.querySelector('#valor3');
let salida = document.querySelector('#salida');
function limpiarCampos(){
    // Al usar la funcion blanquea los campos
        valor1.value = "";
        valor2.value = "";
        valor3.value = "";
       // salidaTiempo.innerHTML = "";
}
function comparar3Numeros(){
    if (valor1.value >= 2){
        salida.innerText = "tuviejaxs"
    }
}
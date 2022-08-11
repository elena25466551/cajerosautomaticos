
let postre = [
    
    {
        "cobertura" : "Sin cobertura.",
        "precio":450,
        "stock": 5
    }
    ,
    {
        "cobertura" : "Con cobertura Oreo",
        "precio":480,
        "stock": 5
    },
    {
        "cobertura" : "Con cobertura Frutilla.",
        "precio":500,
        "stock": 5
    },
    {
        "cobertura" : "Con cobertura Chocolate.",
        "precio":520,
        "stock": 5
    },
    {
        "cobertura" : "Con cobertura Caramelo.",
        "precio":550,
        "stock": 5
    }
    
    
    
    
]
let stockPostre0;let stockPostre1;let stockPostre2;let stockPostre3;let stockPostre4;
let stockss = [
    stockPostre0 = postre[0].stock,
    stockPostre1 = postre[1].stock,
    stockPostre2 = postre[2].stock,
    stockPostre3 = postre[3].stock,
    stockPostre4 = postre[4].stock
]

//Para leer el array postre y el contenido de cada registro
function cargadoLista(){
    for (let i = 0; i < postre.length;i++){
        // console.log(postre[i].cobertura, " ", postre[i].precio)
        // if ((postre[i].cobertura).includes("Sin")){
        //     console.log("Sale sin")
        // }
        let listado = document.querySelector("#listado");
        //a listado yo le estoy concatenando etiquetas li
        //de paso lee el 
        
        listado.innerHTML += `
            <li class="list-group-item ${postre[i].cobertura.includes("Con") ? "bg-success text-white":"bg-secondary text-white"} ">
                    ¿Le gustaría el postre?: ${postre[i].cobertura}
                <br>
                    <div class="ps-3">Su precio es: $${postre[i].precio}</div>
                    <div class="ps-3">Su stock es: ${stockss[i]}</div>
            </li>
        
        `;
      }
      salidaPostre= postre[2].stock
      
}
  
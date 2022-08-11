// Conexiones a html
let taskListShow = document.getElementById("taskList");
//form Entrada/agregado
let formAdd = document.getElementById('formAdd');
let nya = document.getElementById("Nombres");
let descriptionTask = document.getElementById("DescTareas");
let statusTask = document.getElementById("estado");
//evento onsubmit para agregar y validar
formAdd.addEventListener('submit',(e)=>{
    e.preventDefault();
    appTask.agregar()
})

let appTask={
    tasks : [
        {
        "id":uuid.v4(),
        "nombres":"Bonnet Alan",
        "descripcion":"Aprender Angular",
        "estado":"Completado",
        "canEdit":false
        },
        {
        "id":uuid.v4(),
        "nombres":"Lautaro Durante",
        "descripcion":"Aprender HTML,CSS,JS",
        "estado":"En Progreso",
        "canEdit":false
        }
    ],
    mostrar() {
        let TaskList = this.tasks;
        //el innerHTML vacío limpia los elementos por cada actualización
        // y vuelve a cargar los necesarios
        // para evitar el acumulamiento de datos ya pintados
        taskListShow.innerHTML = "";
        for(let i = 0; i < TaskList.length; i++){
          //seteo de botones según el valor booleano del elemento que 
          //representan
          let ifEdit={
              clase:TaskList[i].canEdit?"danger":"primary",
              icono: TaskList[i].canEdit?`<i class="bi bi-x"></i>`:`<i class="bi bi-pen"></i>`,
              funcion:`appTask.canEditar('${TaskList[i].id}')`
          }
          let ifDelete={
              clase:TaskList[i].canEdit?"success":"danger",
              icono: TaskList[i].canEdit?`<i class="bi bi-check2"></i>`:`<i class="bi bi-trash3-fill"></i>`,
              funcion:TaskList[i].canEdit?`appTask.actualizar(${i},'${TaskList[i].id}')`:`appTask.eliminar('${TaskList[i].id}')`
          }
          //fin botones

          //renderizado de botones
          let Codbotones = `
                      <button class="btn btn-outline-${ifEdit.clase} rounded-circle" onclick="${ifEdit.funcion}">
                          ${ifEdit.icono}
                      </button>
                      <button class="btn btn-outline-${ifDelete.clase} rounded-circle" onclick="${ifDelete.funcion}">
                          ${ifDelete.icono}
                      </button>
                      `;
          //renderizado de nombres
          let codNombres = `${TaskList[i].canEdit?`<input ondblclick="appTask.canEditar('${TaskList[i].id}')" type="text" name="nombres" id="nombres-${i}" class="form-control" placeholder="Apellido y Nombre" value="${TaskList[i].nombres}" >`
              :`<p ondblclick="appTask.canEditar('${TaskList[i].id}')">${TaskList[i].nombres}</p>`}`;
          
          //renderizado de descripción
          let codDescript = `${
            TaskList[i].canEdit
              ? `<input ondblclick="appTask.canEditar('${TaskList[i].id}')" type="text" name="descript" id="descripcion-${i}" value="${TaskList[i].descripcion}" class="form-control" placeholder="Tarea">`
              : `<p ondblclick="appTask.canEditar('${TaskList[i].id}')">${TaskList[i].descripcion}</p>`
          }`
          //el renderizado de estado
          let codEstado = `${
            TaskList[i].canEdit
              ? `
          <select class="form-control" name="" id="estado-${i}" value="${TaskList[i].estado}">
              <option>Pendiente</option>
              <option>En Progreso</option>
              <option>Completado</option>
          </select>
          `
              : `
          <label class="badge bg-${
            TaskList[i].estado == "Pendiente"
              ? "danger"
              : TaskList[i].estado == "Completado"
              ? "success"
              : "warning"
          }" ondblclick="appTask.canEditar('${TaskList[i].id}')">${TaskList[i].estado}</label>
              `
          }`
          //codigo modulado para entenderlo
          let codigoRender = `
          <tr>
              <td>
                  ${Codbotones}
              </td>
              <td>
                  ${codNombres}
              </td>                                            
              <td>
                  ${codDescript}
              </td>
              <td>
                  
                  ${codEstado}
              </td>
              
           </tr>
          
          
          `
          
          taskListShow.innerHTML += codigoRender;
        }
        
      },
    canEditar(aidi) {
        let TaskList = this.tasks;
        for (let i = 0; i < TaskList.length; i++) {
          if (TaskList[i].id == aidi) {
            TaskList[i].canEdit = !TaskList[i].canEdit;
            //el sig codigo corrige el valor de estado al activar 
            // "si se puede editar"
            setTimeout(()=>{
              if(TaskList[i].canEdit){
                setTimeout(()=>{
                  document.getElementById(`estado-${i}`).value = TaskList[i].estado
                },100)
              }
            },200)
            
          }
        }
        this.mostrar();
    },
    eliminar(id) {
        let TaskList = this.tasks;
        //el for lee la lista de tareas y si encuentra el id
        //que recibe, lo elimina, está asociado al botón delete
        for (let i = 0; i < TaskList.length; i++) {
          if (TaskList[i].id == id) {
            TaskList.splice(i, 1);
          }
        }
        this.mostrar();
      },
    agregar() {
      let TaskList = this.tasks;
      //forma de agregar el nuevo elemento en la lista
      TaskList.push(
        {
            "id":uuid.v4(),
            "nombres":nya.value,
            "descripcion":descriptionTask.value,
            "estado":statusTask.value,
            "canEdit":false
        }
      );
      //setea los campos a vacío
        document.getElementById("Nombres").value="";
        document.getElementById("DescTareas").value="";
        document.getElementById("estado").value="";
      this.mostrar();
    },
    actualizar(indice, id){
      let TaskList = this.tasks;
      //lee a cada elemento y busca el que coincida con el id
      // luego de eso actualiza las partes del elemento
      TaskList.forEach(function(t){
          if(t.id == id){
              t.nombres = document.querySelector(`#nombres-${indice}`).value;
              t.descripcion = document.querySelector(`#descripcion-${indice}`).value;
              t.estado = document.querySelector(`#estado-${indice}`).value;
              t.canEdit = false;
              
          }
          
      })
      //en caso de completarse muestra el resultado.
      if(!TaskList[indice].canEdit) {this.mostrar()};
   }
}
//se ejecuta appTask para que muestre los elementos
// digamos que los renderiza-.
appTask.mostrar()


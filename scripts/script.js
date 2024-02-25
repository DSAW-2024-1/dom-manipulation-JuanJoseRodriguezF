console.log("JavaScript working!");
const input = document.querySelector("input");/*Se crean las variables*/ 
const addBtn = document.querySelector(".btn-agregar");
const ul = document.querySelector("ul");
const vacio = document.querySelector(".vacio");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const texto = input.value;//Guarda el valor de texto ingresado

  if (texto !== "") {//Cuando hay texto escrito, crea la tarea y la muestra
    const li = document.createElement("li");
    const p = document.createElement("p");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        p.style.textDecoration = "underline";// Si el checkbox está marcado, subrayar el texto
      } else {
        p.style.textDecoration = "none";
      }
    });
    p.textContent = texto;

    li.appendChild(p);
    li.appendChild(checkbox);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";//Para vaciar el espacio de texto
    vacio.style.display = "none";//Para quitar el "No hay tarea por el momento."
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Eliminar";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;//Se especifica que no se quiere eliminar el boton si no el padre(li)
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {//Para cuando no haya tareas aparezca de nuevo el "No hay tarea por el momento."
      vacio.style.display = "block";
    }
  });

  return deleteBtn;
}
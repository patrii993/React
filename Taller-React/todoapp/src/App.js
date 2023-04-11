import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  //Estado -> useState maneja el estado de cada componente (no global), se le pasa por parametro el estado inicial
  const [todos, addTodo] = useState([]);
  function setTodo(todo) {
    addTodo([...todos, todo]);
  }

  //Para eliminar usando splice y actualizando la variable addTodo
  function deleteTodo(todo){
    var index =todos.indexOf(todo);
     todos.splice(index,1);
     addTodo([...todos]);
    
  }
  //Se ejecuta siempre que el usuario actualice el estado de la app
  useEffect(() => {});
  //key no debe ser la misma que el nombre puede producir errores
  //Mejor clave unicas
  return (
    <div className="App">
      <input type="text" id="input-todo" />
      <button
        onClick={() => {
          setTodo(document.getElementById("input-todo").value);
        }}
      >
        Añadir tarea
      </button>
      <ul>
        {todos.map((todo) => (
          //Solo puede renderizar un hijo, por eso si hay mas de una etiqueta tiene que englobarse en un fragment o un div
          //Aqui actua como otro return, por eso podemos renderizar otro
          <div className="todo">
            <li key={todo}>{todo}</li>
            <p onClick={()=>deleteTodo(todo)}>Eliminar</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;

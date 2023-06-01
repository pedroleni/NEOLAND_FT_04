import { useEffect, useReducer, useState } from "react";
import { reducerTodoList, todoList } from "../states/todoList";
import "./UseReducer.css";
const UseReducer = () => {
  // recibe en el array dos cosas: estado actual ( todo) y el dispatch que se encarga de despachar los diferentes tipos de las acciones

  // en el parentesis del useReducer recibimos el:
  // -------------> 1) La funcion reductora con los diferentes tipos de las acciones
  // -------------> 2) El estado inicial de nuestro reducer

  const [todos, dispatch] = useReducer(
    reducerTodoList,
    local ? JSON.parse(local) : todoList
  );
  /// vamos a hacer una funcion que se encargue de utilizar el dispatch
  const handleComplete = (todo) => {
    // el dispatch lo que hace es dar el tipo de la accion y el id del todo para poder gestionar la accion
    dispatch({ type: "COMPLETE", payload: { id: todo.id } });
  };

  const handleRequest = (todo, e) => {
    dispatch({
      type: "NEWREQUEST",
      payload: {
        id: todo.id,
        request: e.target.value,
      },
    });
  };

  const handleRemove = (todo) => {
    dispatch({
      type: "REMOVEREQUEST",
      payload: {
        id: todo.id,
      },
    });
  };

  useEffect(() => {
    console.log("todos", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>USEREDUCER TODOLIST</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label key={todo.id}>
            <h2>{todo.title}</h2>
            <div className="containerCheck">
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />

              <p>{JSON.stringify(todo.complete)}</p>

              {todo.newRequest && (
                <>
                  <p>{todo.newRequest}</p>
                  <button onClick={() => handleRemove(todo)}>
                    Borrar request
                  </button>
                </>
              )}
            </div>

            <input
              type="text"
              id="newRequest"
              onChange={(e) => handleRequest(todo, e)}
            />
          </label>
        </div>
      ))}
    </>
  );
};

export default UseReducer;

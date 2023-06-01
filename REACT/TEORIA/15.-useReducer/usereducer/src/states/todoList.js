//! ------El estado inicial de nuestra aplicacion

export const todoList = [
  {
    id: 1,
    title: "Modificar el temario de react",
    complete: false,
  },
  {
    id: 2,
    title: "Llamar cliente",
    complete: false,
  },
];

// la accion que tenemos va a ser del tipo objeto con la siguiente forma:
// action = {type: " ", payload:{id: ""}}

// en el payload poner todo lo que tu quieras enviar para modificar el estado

//! ------Funcion que se encarga de modificar el estado--> FUNCION REDUCER

export const reducerTodoList = (state, action) => {
  // las action son las peticiones de los cliente (usuario)

  // en el tipo nos dan el tipo de accion que quiere hacer
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complet };
        } else {
          return todo;
        }
      });
    case "NEWREQUEST":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, newRequest: action.payload.request };
        } else {
          return todo;
        }
      });

    case "REMOVEREQUEST":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return delete todo.newRequest;
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

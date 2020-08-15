<template>
  <div id="app">
    <div id="header">
      <Search @query-change="querySearch" />
    </div>

    <div id="main-container">
      <h2>Todos</h2>
      <!--
        Sugerencia:
        Los componentes TodoAdd y Todos deberían formar parte de un mismo componente
        ya que en ambos se maneja la lógica de agregar o quitar las tareas.

        Si vamos al caso es el mismo estado el que está siendo modificado en 2 componentes distintos.
      -->
      
      <TodoAdd @addTodo="addTodo" />
      <Todos :todoslist="copyTodos" @delete-todo="deleteTodo" />
    </div>
  </div>
</template>

<script>
import Search from "./components/Search";
import Todos from "./components/Todos";
import TodoAdd from "./components/TodoAdd";

export default {
  name: "App",
  components: {
    Search,
    Todos,
    TodoAdd,
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id != id);
      this.copyTodos = [...this.todos];
    },
    addTodo(todo) {
      this.todos.push(todo);
      this.copyTodos = [...this.todos];
    },

    /**
     * Deberías normalizar el texto y pasarlo a toLowerCase para que la búsqueda
     * no se rompa con asteriscos o con la diferencia entre mayúsculas y minúsculas.
     */

    querySearch(query) { 
      if (query.trim() === "") {
        this.copyTodos = [...this.todos];
      } else {
        const temp = this.todos.filter((todo) => {
          return todo.title.includes(query);
        });

        this.copyTodos = [...temp];
      }
    },
  },
  data() {
    return {
      todos: [
        {
          id: 0,
          title: "comprar la cena",
          completed: false,
        },
        {
          id: 1,
          title: "Sacar a pasear al perro",
          completed: true,
        },
        {
          id: 2,
          title: "jugar Xbox",
          completed: false,
        },
        {
          id: 3,
          title: "Terminar tutorial",
          completed: true,
        },
      ],
      copyTodos: [],
    };
  },
  created() {
    this.copyTodos = [...this.todos];
  },
};
</script>

<style>
@import "./assets/css/bootstrap.min.css";
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  padding: 0;
  margin: 0;
}

#main-container {
  border: 1px solid #ccc;
  width: 600px;
  margin: 100px auto;
}

#header {
  background: black;
  padding: 10px;
}

h2 {
  padding: 0 10px;
}
</style>

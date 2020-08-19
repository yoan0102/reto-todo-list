<template>
  <div id="app">
    <div class="container-fluid bg-dark p-5 text-center">
     <div class="row">
        <Search @query-change="querySearch" />
     </div>
    </div>
    <div id="main-container">
      <h2 class="text-center">Todos</h2>
      <Todos :todoslist="copyTodos" @delete-todo="deleteTodo" @addTodo="addTodo" />
    </div>
  </div>
</template>

<script>
import Search from "./Search";
import Todos from "./Todos";

export default {
  name: 'TodosView',
  components: {
    Search,
    Todos,
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
}</style>

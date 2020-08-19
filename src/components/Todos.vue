<template>
  <div>
      <form @submit.prevent="addTodo">
        <div class="form-group p-5">
          <input type="text" v-model="title" class="form-control" />
          <input type="submit" value="Agregar" class="btn btn-success btn-block rounded-pill my-4" />
        </div>
      </form>
  
    <div v-for="todo in todoslist" :key="todo.id" class="p-5">
      <TodoItem :todo="todo" @delete-todo="$emit('delete-todo', todo.id)" />
      <!--
        ¿Es necesario el "pasamanos" del todo.id entre el TodoItem y el App?
        ¿No podríamos manejar el estado de la lista acá y enviarle al App un 
        update del estado de la lista completa?
      -->
    </div>
    
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import { uuid } from "vue-uuid";

export default {
  name: "Todos",
  props: ["todoslist"],
  components: {
    TodoItem,
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo() {
      const newTodo = { 
        id: uuid.v4(), // ¡Muy buena idea! Aunque cuando apliques persistencia será mejor que los ID te los genere el Back-end. :)
        title: this.title,
        completed: false,
      };
      this.title = "";
      
      this.$emit("addTodo", newTodo);
    },
  },
};
</script>

<style></style>

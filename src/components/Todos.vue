<template>
  <div>
    <!--
      ¡Bien implementado el v-for con su key!
    -->
    <div v-for="todo in todoslist" :key="todo.id">
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
export default {
  name: "Todos",
  props: ["todoslist"],
  components: {
    TodoItem,
  },
};
</script>

<style></style>

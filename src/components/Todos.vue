<template>
  <div>
    <div v-for="todo in todoslist" :key="todo.id">
      <TodoItem :todo="todo" @delete-todo="$emit('delete-todo', todo.id)" />
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

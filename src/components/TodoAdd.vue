<template>
  <div id="add-container">
    <!--
      (1)
      Sugerencia: <form @submit.prevent="addTodo">
      Con esa directiva puedes prevenir default del submit
    -->
    <form @submit="addTodo">
      <input type="text" v-model="title" />
    </form>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  name: "TodoAdd",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault(); // Si implementas (1) no debería ser necesario esta instrucción
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

<style scoped>
#add-container {
  padding: 10px;
}

input {
  padding: 10px;
  outline: none;
  border: solid 1px #ccc;
  width: 100%;
}
</style>

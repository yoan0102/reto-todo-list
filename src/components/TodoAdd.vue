<template>
  <div id="add-container">
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" />
      <input type="submit" value="Agregar" class="btn btn-success rounded-pill my-4" />
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

<style scoped>



</style>

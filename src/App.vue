<template>
<div>
  <TodosView />
</div>
</template>

<script>
import TodosView from './components/TodosView';
export default {
  name: "App",
  components: {
    TodosView
  }
  
}
</script>

<style>
@import "./assets/css/bootstrap.min.css";

</style>

<template>
  <div class="container-fluid">
    <h1 class="text-white text-center">Encuentra tu Task</h1>
      <input
      type="text"
      v-model="query"
      @input="$emit('query-change', query)"
      v-focus
      class="form-control"
      
    />
    
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: "",
    };
  },
  computed: {
    
  }
};
</script>

<style scoped>


</style>

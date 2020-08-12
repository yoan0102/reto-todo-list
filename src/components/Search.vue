<template>
  <div id="search-container">
    <h1 class="text-white text-center">Encuentra tu Task</h1>
    <input
      type="text"
      v-model="query"
      @input="$emit('query-change', query)"
      v-focus
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
};
</script>

<style scoped>
#search-container {
  width: 600px;
  margin: 0 auto;
}

input {
  padding: 10px;
  width: 100%;
  outline: none;
}
</style>

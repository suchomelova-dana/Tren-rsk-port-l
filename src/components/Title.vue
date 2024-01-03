<template>
  <div class="title">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: "Title.vue",
  props: {
    title: String
  }
}
</script>

<style scoped>

.title{
  position: relative;
  box-sizing: border-box;
}
</style>
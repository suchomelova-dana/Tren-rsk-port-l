<template>
  <div class="box-content">
      <OneItem v-for="video in videos_array" :video="video" :class="{box_hidden: this.active_cat !== video.category && this.active_cat !== 'Vše' }"></OneItem>
  </div>
</template>

<script>
import OneItem from "@/components/OneItem";
export default {
  name: "Videos.vue",
  components: {OneItem},
  props:{
    videos_array: Array,
    active_cat: String
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.box-content{
  display: flex;
  width: 85%;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 50px;
}

</style>
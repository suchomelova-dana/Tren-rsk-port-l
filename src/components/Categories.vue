<template>
  <div class="categories">
    <div v-for="category in cat_array" class="category-btn" @click="changeCategory(category)" :class="{category_btn_active: category === this.active}">
      {{category}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories.vue",
  props: {
    cat_array: Array
  },
  methods: {
    changeCategory(clicked, event){

      this.$emit("changeCat", clicked );

      this.active = clicked;

      let remove = document.getElementsByClassName("category-btn-active");
      if (remove.length > 0){
        remove[0].className = "category-btn";
      }

      let videos = document.getElementsByClassName("box");
      for(const video of videos){
        video.classList.remove("animation");
        void video.offsetWidth;
        video.classList.add("animation");
      }

      event.srcElement.className = "category-btn-active";
    }
  },
  data() {
    return{
      active: "Vše"
    }
  }
}
</script>

<style scoped>

.categories{
  display: flex;
  justify-content: center;
  margin-bottom: 90px;
  flex-wrap: wrap;
  position: relative;
}

.category-btn, .category-btn-active{
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  color: darkgrey;
  font-size: 15px;
  transition: ease-in-out 0.3s;
}

.category-btn:hover{
  color: black;
  cursor: pointer;
  transition: ease-in-out 0.3s;
}

.category_btn_active{
  color: black;
}

@media screen and (min-width: 320px) {
  .categories{
    flex-direction: column;
  }
  .category-btn, .category-btn-active{
    padding-top: 40px;
  }
}

@media screen and (min-width: 600px) {
  .categories{
    flex-direction: row;
  }
  .category-btn, .category-btn-active{
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media screen and (min-width: 980px) {
  .categories{
    flex-direction: row;
  }
  .category-btn, .category-btn-active {
    padding-left: 20px;
    padding-right: 20px;
  }
}



</style>
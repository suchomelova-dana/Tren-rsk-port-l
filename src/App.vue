<template>
  <div class="app">
    <Menu/>
    <div class="body">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
export default {
  components: {Menu, Footer}
}
</script>

<style>

.app{
  padding-top: 70px;
  height: 100%;
  position: relative;
  box-sizing: border-box;
}

.title h2{
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  font-size: 25px;
  font-weight: 600;
  padding-top: 70px;
  text-transform: uppercase;
  letter-spacing: 5px;
  position: relative;
}

.not-ready {
  color: darkgray;
  font-size: 14px;
  letter-spacing: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.page-height{
  position: relative;
  min-height: calc(100% - 90px);
}

.body {
  min-height: calc(100% - 90px);
}

</style>


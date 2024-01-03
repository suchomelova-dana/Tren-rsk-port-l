<template>
  <header :class="{'scrolled-nav' : scrolledNav}">
    <nav>
      <router-link :to="{name: 'homepage'}" onclick="window.location.reload()">
        <div class="logo">
          <div class="trenersky">Trenérský</div>
          <div class="portal">portál</div>
        </div>
      </router-link>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name: 'balet'}">Balet</router-link></li>
        <li><router-link class="link" :to="{name: 'posilovani'}">Posilování</router-link></li>
        <li><router-link class="link" :to="{name: 'rozcvicka'}">Rozcvička</router-link></li>
        <li><router-link class="link" :to="{name: 'technika'}">Techika náčiní</router-link></li>
      </ul>

      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="fa-bars" :class="{'icon-active' : mobileNav}">
          <div id="bar1" class="bars" :class="{'bar1-active' : mobileNav}"></div>
          <div id="bar2" class="bars" :class="{'bar2-active' : mobileNav}"></div>
          <div id="bar3" class="bars" :class="{'bar3-active' : mobileNav}"></div>
        </i>
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link @click="toggleMobileNav" class="link" :to="{name: 'balet'}">Balet</router-link></li>
          <li><router-link @click="toggleMobileNav" class="link" :to="{name: 'posilovani'}">Posilování</router-link></li>
          <li><router-link @click="toggleMobileNav" class="link" :to="{name: 'rozcvicka'}">Rozcvička</router-link></li>
          <li><router-link @click="toggleMobileNav" class="link" :to="{name: 'technika'}">Techika náčiní</router-link></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created(){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted(){
    window.addEventListener('scroll', this.updateScroll);

  },
  methods:{
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },

    updateScroll(){

      if(this.mobileNav){
        window.scrollTo(0,0);
      }

      const scrollPosition = window.scrollY;
      if(scrollPosition > 50){
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      // return;
    },

  }
};
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

header, nav{
  height: 70px;
  width: 100%;
  position: fixed;
  background-color: white;
  color: black;
  top: 0;
  z-index: 100;
}

nav{
  position: relative;
}

.navigation{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  width: 40%;
  height: 80%;
  /*background-color: orange;*/
  text-decoration: none;
  list-style: none;
  display: flex;
  justify-content: space-around;
  z-index: 100;
}

@media screen and (min-width: 320px) {
  .trenersky{
    font-size: 20px;
  }
  .portal{
    font-size: 18px;
  }
}

@media screen and (min-width: 600px) {
  .navigation{
    width: 60%;
  }
  .trenersky{
    font-size: 28px;
  }
  .portal{
    font-size: 26px;
  }
}

@media screen and (min-width: 980px) {
  .navigation{
    width: 40%;
  }
  .trenersky{
    font-size: 30px;
  }
  .portal{
    font-size: 28px;
  }
}

ul li{
  align-content: center;
  align-self: center;
  text-align: center;
  color: black;
  text-decoration: none;
  list-style: none;
  /*background-color: deepskyblue;*/
}

.link{
  text-decoration: none;
  list-style: none;
  color: black;
  font-size: 14px;
  font-weight: 400;
}

.link:hover{
  color: darkgrey;
}

#logoimg{
  height: 70%;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  position: absolute;
  margin-left: 2%;
}

.logo{
  /*background-color: cornflowerblue;*/
  color: black;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-wrap: nowrap;
  margin-left: 4%;
  /*line-height: 0;*/
}

.trenersky{
  font-family: sans-serif;
  /*font-size: 30px;*/
  font-weight: 600;
  text-transform: uppercase;
}

.portal{
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  /*font-size: 28px;*/
  padding-left: 5px;
  font-style: italic;
}

nav a.router-link-exact-active {
  color: darkgray;
}

.icon {
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  right: 24px;
  height: 100%;
}

.icon i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}

.icon-active {
  transform: rotate(180deg);
}

.bar1-active {
  transform: rotate(-44deg) translate(-6px,7px);
}

.bar2-active {
  opacity: 0%;
}

.bar3-active {
  transform: rotate(45deg) translate(-6px,-7px);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 140%;
  background-color: white;
  top: 70px;
  right: 0;
  align-items: center;
  align-content: center;
  padding: 60px 10px 60px 10px;
  box-sizing: border-box;
}


.mobile-nav-enter-active,
.mobile-nav-leave-active{
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(1000px);
}

.mobile-nav-enter-to{
  transform: translateX(0);
}

.bars {
  width: 25px;
  height: 2px;
  border-radius: 25px;
  background-color: black;
  margin: 7px;
  transition: 0.4s;
}

.scrolled-nav{
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  /*background-color: white;*/
  /*animation: ease-in-out 0.3s;*/
}

.scrolled-nav nav{
  /*padding: 13px 0;*/
}



</style>
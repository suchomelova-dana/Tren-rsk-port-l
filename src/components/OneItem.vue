<template>
  <div class="box">

    <div class="video-area" @mouseover="hovered = true" @mouseleave="hovered = false">
      <div v-if="!isLoaded" class="loading"></div>
      <img v-show="isLoaded" id="img" :src="video.image" alt="" @load="onLoad()">
      <div v-show="isLoaded" class="time" :class="{box_hidden: hovered}">
        {{video.time}}<a>min</a>
      </div>
      <img v-show="isLoaded" id="difficulty" :src="video.difficulty" alt="" :class="{box_hidden: hovered}">

      <div class="clicked_video" v-if="hovered" :class="{unclicked_video: !hovered}">
        <div class="linkL" @click="openLink(video.linkDlouha, video)"><a>Dlouhá <br/>verze</a></div>
        <div class="linkR" @click="openLink(video.linkTrenerska, video)"><a>Trenérská <br/> verze</a></div>
      </div>
    </div>

    <div class="text-area">
      <h3>{{video.description}}</h3>
      <h4>{{video.title}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneItem",
  props:{
    video: Object
  },
  methods:{
    onLoad(){
      this.isLoaded = true;
    },
    openLink(link, video){
      this.hovered = false;
      window.open(link, '_blank');
    }
  },
  data() {
    let isLoaded = false;
    let clicked = false;
    let hovered = false;
    return {
      isLoaded, clicked, hovered
    }
  }
}
</script>

<style scoped>

* {
  box-sizing: border-box;
}

.loading {
  /*background: url("../assets/loading.svg") center no-repeat;*/
  /*background-size: 50px;*/
  background: whitesmoke;
  height: 100%;
  width: 100%;
  /*animation: rotation linear 2s infinite;*/
  position: relative;
}


@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.box{
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  padding-bottom: 60px;
}

.video-area{
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background: whitesmoke;
  width: 100%;
  padding-bottom: 60%; /* (25% of the parent's width) * 2.25 */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

/*.animation {*/
/*  animation: showBox 0.5s;*/
/*}*/

/*@keyframes showBox {*/
/*  0%{*/
/*    transform: scale(0.5);*/
/*    opacity: 0.5;*/
/*  }*/
/*  85%{*/
/*    transform: scale(1);*/
/*    opacity: 1;*/
/*  }*/
/*}*/

.box_hidden{
  display: none;
}

#img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  position: absolute;
}

.over{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.time{
  background: white;
  position: absolute;
  width: 25%;
  font-size: 18px;
  padding: 12px;
  top: 0;
  right: 0;
  font-family: 'Merriweather', sans-serif;
}

.time a{
  font-size: 10px;
}

#difficulty{
  width: 30%;
  position: absolute;
  right: 0;
  bottom: 0;
  /*transform: scale(0.8);*/
}

.text-area{
  width: 100%;
  position: relative;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
}

.text-area h3{
  font-size: 15px;
  margin: 0;
  font-weight: 400;
}

.text-area h4{
  font-size: 13px;
  margin: 0;
  font-weight: 300;
  color: darkgrey;
}

.unclicked_video{
  display: none;
}

.clicked_video{
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.linkL, .linkR{
  background: rgba(0,0,0,0.4);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
}

.linkL:hover, .linkR:hover{
  background: rgba(0,0,0,0.8);
}

.linkL a, .linkR a{
  color: white;
  text-decoration: none;
  font-weight: 300;
}

.linkL{
  border-right: white solid;
  border-width: 1px;
  animation: linkLAnimation 0.5s 1;
}

.linkR{
  border-left: white solid;
  border-width: 1px;
  animation: linkRAnimation 0.5s 1;
}

@keyframes linkLAnimation {
  0%{
    left: -30%;
    opacity: 0;
  }
  85%{
    left: 0;
  }
}

@keyframes linkRAnimation {
  0%{
    right: -30%;
    opacity: 0;
  }
  85%{
    right: 0;
  }
}

@media screen and (max-width: 480px) {
  .box{
    flex-basis: 100%;
  }
}

@media screen and (min-width: 480px) {
  .box{
    flex-basis: 100%;
  }
}


@media screen and (min-width: 600px) {
  .box{
    flex-basis: 50%;
  }

}



@media screen and (min-width: 1000px) {
  .box{
    flex-basis: 33.33%;
  }

}



</style>
<template>
    <div class="video-area">
        <video id="video" muted="true" controls="false" autoplay playsinline loop >
          <source src="@/assets/portal_video.mp4" type="video/mp4">
        </video>
        <div class="overlay" :class="{blur_video: scrolledNav}">
          <div class="text-area">
            <h1>Výuková videa</h1>
<!--            <h2>Pro trenéry a gymnastky</h2>-->
          </div>
        </div>
    </div>

  <div class="white-box">
      <div class="introduction-area">
        <div class="line"></div>
        <div class="introduction">
          Vítejte na trenérském portálu.
          Tento portál byl vytvořen s cílem inspirovat trenéry a trenérky moderní gymnastiky v různých oblastech tohoto sportu.
          Připravili jsme a připravujeme pro Vás sestříhaná videa, sestavená našimi trenérkami s garancí  MUDr. Kateřiny Kapounkové - dlouholeté trenérky  a předsedkyně Trenérsko metodické komise Českého svazu moderní gymnastiky.
          Nyní jsou k dispozici videa z oblasti posilování, a nadále se portál bude rozvíjet.
        </div>
      </div>

<!--    <div class="aktuality">-->
<!--      <p><a>AKTUALITY: <br/></a> Nově - videa posilování. Nyní připravujeme videa rozcvičky. Očekávat je můžete na podzim roku 2022.</p>-->
<!--    </div>-->
  </div>

</template>

<script>
export default {
  name: "Home Page",
  mounted(){
    window.addEventListener('scroll', this.updateScroll);

    let video = document.getElementById('video');
    video.mute = "muted";
    video.autoplay = "true";
    video.volume= 0;

    video.removeAttribute('controls');
  },

  methods:{
    updateScroll(){
      const scrollPosition = window.scrollY;
      if(scrollPosition > 1){
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
  },
  data(){
    return{
      scrolledNav: null,
    }
  }
}
</script>

<style scoped>

.video-area{
  position: relative;
  width: 100%;
  height: 60%;
}

#video{
  object-fit: cover;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(60% - 40px);
}

.blur_video{
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: ease-in-out 0.4s;
}

.overlay{
  position: absolute;
  background-image: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0));
  top:0;
  width: 100%;
  height: 100%;
}

video::-webkit-media-controls-panel {
  display: none !important;
  opacity: 1 !important;}

.line{
  position: absolute;
  box-sizing: border-box;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 0.5px;
  background-color: dimgrey;
}


.introduction-area{
  width: 100%;
  background-color: white;
  position: relative;
  box-sizing: border-box;

}

.introduction{
  width: 70%;
  position: relative;
  margin: auto;
  padding: 5% 20px 5% 20px;
  text-align: justify-all;
  box-sizing: border-box;
  color: dimgrey;
  font-size: 12px;
  line-height: 30px;
  background-color: white;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;

}

.text-area{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;

}

.overlay h1{
  text-transform: uppercase;
  font-size: 45px;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  letter-spacing: 4px;
  opacity: 0.9;
  color: white;
  margin: 0;
}

.overlay h2{
  font-size: 17px;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  letter-spacing: 4px;
  margin: 0;
  color: white;
  animation: text2 2s 1;
}

.aktuality{
  color: white;
  background-color: rgba(0,0,0,0.3);
  position: relative;
  width: 70%;
  font-size: 12px;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  margin: auto;
  box-sizing: border-box;
  padding: 10px 20px 10px 20px;
}

.aktuality a{
  font-weight: 700;
}

.aktuality p{
  font-weight: 300;
}


.white-box{
  width: 100%;
  background: white;
  position: relative;
  padding-bottom: 300px;
  animation: slideUp 2s 1;
}

@keyframes slideUp {
  0%{
    margin-top: 10%;
    opacity: 0;
    position: relative;
  }
  30%{
    margin-top: 10%;
    opacity: 0;
    position: relative;
  }
  85%{
    margin-top: 0;
    opacity: 1;
    position: relative;
  }
}




@keyframes text1 {
  0%{
    letter-spacing: 4px;
    opacity: 0;
  }
  30%{
    letter-spacing: 20px;
  }
  85%{
    letter-spacing: 4px;
  }
}

@keyframes text2 {
  0% {
    opacity: 0;
  }
  70%{
    opacity: 0;
  }
}

</style>
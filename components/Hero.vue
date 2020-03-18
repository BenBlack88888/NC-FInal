<template>
  <div class="container">
    <div class="img" v-lazy-load></div>
    <div class="content">
        <div class="logo" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-offset="-200" data-aos-duration="500" data-aos-delay="500" ></div>
        <div class="copy">
        <h1 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-offset="-200" data-aos-duration="500" data-aos-delay="800">
            Make it yours
            <br />make it matter.
        </h1>
        <h2 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-offset="-200" data-aos-duration="500" data-aos-delay="1100">Custom Designed Craft Beer for your Tap</h2>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: Lato;
}

.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}

.content{
    height: 50vh;
    width: 35vw;
    position: absolute;
    top: 30%;
    left: 12%;
}

.copy {
  position: absolute;
  top: 50%;
  left: 4%;
}

.copy h1 {
  font-weight: bolder;
  font-size: 4vw;
  color: #fff;
}

.copy h2 {
  font-weight: lighter;
  font-size: 1.4vw;
  color: #fff;
}

.img {
  background-image: url("/hero.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position-y: 60%;
}

.logo {
  background-image: url("/logo_white.png");
  width: 12vw;
  height: 12vw;
  z-index: 2;
  background-size: contain;
  position: relative;
  top: 5%;
  left: 2%;
}

@media only screen and (max-width: 500px){
  .img{
      background-position-x: 40%;
  }

  .content{
    height: 90vh;
    width: 90%;
    top: 5%;
    left: 3%;
  }

  .copy{
    top: 75%;
  }

  .copy h1{
      font-size: 6vh;

  }

    .copy h2{
    font-size: 14pt;
    width: 60%;
  }

  .logo{
      width: 40vw;
  height: 40vw;
  }

}

</style>>

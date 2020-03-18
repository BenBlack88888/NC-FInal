<template>
  <div class="container">
    <div class="copy">
      <h1 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
        Craft Beer designed,
        <br />for your business.
      </h1>
      <h2 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
        Create and serve your own custom craft beer
        <br />anywhere and anytime.
      </h2>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
        There are currently few beers in China that truly make the cut to be called craft. And with taps becoming more and more of the same across many bars, customers merely have an illusion of choice but thirst for better choices. 
<br><br> That’s why NanoCrafted provides custom designed industrial quality beer at any scale for individual bars, nightclubs or even events. With a unique beer your guests can enjoy one of a kind experiences that help your location or event stand out. Each beer is created according to your individual requirements and needs to ensure that it’s the perfect fit for your business.

      </p>
    </div>
    <div v-lazy-load class="img" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="200"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: Lato;
  color: #353535;
}
.container {
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
}
.img {
  background-image: url("/intro.jpg");
  background-size: cover;
  width: 32%;
  height: 50vh;
  background-position-y: 40%;
  margin-left: 5vw;
}

.copy {
  width: 40%;
  color: #353535;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5vw;
}

.copy h1 {
  font-size: 4vw;
  padding: 0.5vw;
}

.copy h2 {
  font-weight: lighter;
  font-size: 1.8vw;
  padding: 0.5vw;
  background: -webkit-linear-gradient(#ff2f0f, #f28e1c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.copy p {
  font-size: 0.9vw;
  padding-top: 2vw;
  padding: 0.5vw;
  padding-top: 1.5vw;
    font-weight: lighter;
}

@media only screen and (max-width: 500px) {
  .container {
    flex-wrap: wrap;
    height: auto;
    margin: 5vh 0;
  }

  .copy {
    width: 90%;
  }

  .copy h1 {
    font-size: 6vh;
  }
  .copy h2 {
    font-size: 4vh;
    margin-top: 5vh;
  }

  .copy p {
    font-size: 13pt;
    margin: 5vh 0;
    line-height: 1.5;
      font-weight: normal;
  }

  .img {
    width: 100%;
    margin-left: 0;
    height: 40vh;
  }
}
</style>
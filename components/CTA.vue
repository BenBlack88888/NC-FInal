<template>
  <div class="container">
    <div class="img" v-lazy-load></div>
    <div class="content">
      <div class="copy">
        <h1 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
          Let's Start
          <br />Brewing Today.
        </h1>
        <h2
          class="emailcta"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="300"
        >
          Send us an Email
          <br />and we will get back to you soon
          <br />
          <br>
          <a class="email" href="mailto:ben@blackandzero.com?Subject=Hello%20again">Click Here</a>
        </h2>
        <h4
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="300"
          class="OR"
        >OR</h4>
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="300"
          class="wechatCTA"
        >
          Contact us directly
          <br />via WeChat
        </h2>
        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300" class="qr"></div>
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

.copy {
  position: absolute;
  top: 10%;
  left: 10%;
}

.copy h1 {
  font-weight: bolder;
  font-size: 5.5vw;
  color: #fff;
}

.copy h2 {
  font-weight: lighter;
  color: #fff;
}

.img {
  background-image: url("/cta.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position-x: 10%;
}

.form-field {
  width: 30%;
  height: 2vw;
  margin-top: 2%;
}

.emailcta {
  margin-top: 5%;
  font-size: 1vw;
}
.OR {
  color: #fff;
  margin: 3vh 0;
  position: relative;
  font-size: 6vh;
}

.email{
  font-weight: bolder;
  font-size: 4vh;
}

.wechatCTA {
  font-size: 1vw;
  margin-top: 1%;
}

.qr {
  height: 8vw;
  width: 8vw;
  background-image: url("/qr.png");
  background-size: cover;
  background-position-y: 65%;
  margin-top: 1%;
}

a {
  text-decoration: none;
  background: -webkit-linear-gradient(#ff2f0f, #f28e1c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 1%;
}

@media only screen and (max-width: 500px) {
  .copy {
    width: 90%;
    text-align: center;
    left: 5%;
  }

  .copy h1 {
    font-size: 6vh;
    width: 100%;
    background: -webkit-linear-gradient(#ff2f0f, #f28e1c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .copy h2 {
    font-size: 16pt;
    margin-top: 5vh;
    margin-left: 0%;
    width: 100%;
  }

  .OR {
  color: #fff;
  margin: 3vh;
  position: relative;
  left: 18%;
  width: 50%;
  transform: translateX(-50%);
}


  .copy p {
    font-size: 14pt;
    margin: 5vh 0;
    line-height: 1.5;
    width: 100%;
  }
  .form-field {
    width: 90%;
    height: 7vh;
    margin: 3vh 0;
  }

  .qr {
    margin-top: 5vh;
    height: 30vw;
    width: 30vw;
    left: 35%;
    transform: translateX(-50%);
    position: relative;
  }

  ::placeholder {
    font-family: Lato;
    font-size: 14pt;
    color: #c0c0c0;
    font-style: italic;
    top: 30%;
    opacity: 1; /* Firefox */
    text-align: center;
  }
}
</style>>

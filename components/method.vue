<template>
  <div class="container">
    <div class="img" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300"></div>
    <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="300">
      Our
      <br />
      <span>Way</span>
    </h1>
    <div
      class="bodycopy"
      data-aos="fade-right"
      data-aos-easing="ease-in-out"
      data-aos-duration="300"
    >
      <p>We brew with without compromise. That’s why we strictly refuse extracts, rushed fermentation and other common practices in the industry.</p>
    </div>
    <div
      class="iconholder"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
    >
      <div class="icon">
        <div class="png1"></div>
        <h2 class="keyword">Organic</h2>
      </div>
      <div class="icon">
        <div class="png2"></div>
        <h2 class="keyword">Premium</h2>
      </div>
      <div class="icon">
        <div class="png3"></div>
        <h2 class="keyword">Imported</h2>
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
  color: #353535;
  line-height: 1.7;
}

.container {
  height: 100vh;
  position: relative;
}

.img {
  position: absolute;
  width: 100%;
  height: 27vw;
  background-image: url("/method.jpg");
  background-size: cover;
  background-position-y: 65%;
  z-index: -1;
}

h1 {
  font-size: 6vw;
  color: #ffffff;
  position: absolute;
margin-top: 1.5vh;
  line-height: 1;
  left: 10vw;
}

span {
  position: relative;
  left: 5%;
}

.bodycopy {
  position: absolute;
  width: 23vw;
  height: auto;
  top: 35vw;
  left: 10vw;
  font-size: 0.9vw;
  font-weight: lighter;
}

p {
  width: 100%;
}

/* icons */

.iconholder {
  width: 55vw;
  height: 15vw;
  position: absolute;
  left: 35vw;
  top: 32vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icon {
  display: flex;
  width: 14vw;
  height: 14vw;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.png1 {
  height: 10vw;
  width: 10vw;
  background-image: url("/Organic.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 50%;
}
.png2 {
  height: 10vw;
  width: 10vw;
  background-image: url("/Premium.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: 70%;
}
.png3 {
  height: 10vw;
  width: 10vw;
  background-image: url("/International.png");
  background-size: contain;
  background-repeat: no-repeat;
}

h2 {
  text-align: center;
}

@media only screen and (max-width: 500px) {
  .container {
    height: 170vh;
  }
  .img {
    height:40%;
  }

  h1 {
    top:33%;
    font-size: 10vh;
    line-height: 0.7;
  }

  .bodycopy {
    top: 47%;
    font-size: 13pt;
    width: 80%;
    font-weight: normal;
  }

  .iconholder {
    top: 57%;
    width: 100%;
    left: 0;
    min-height: 35%;
    flex-wrap: wrap;
    margin-top: 10vh;
    overflow: hidden;
  }
  .icon {
    height: 42vw;
    width: 42vw;
    overflow-y: hidden;
  }

  .png1 {
    height: 30vw;
    width: 30vw;
  }

  .png2 {
    height: 30vw;
    width: 30vw;
  }

  .png3 {
    height: 30vw;
    width: 30vw;
  }

  h2 {
    font-style: italic;
    background: -webkit-linear-gradient(#ff2f0f, #f28e1c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>

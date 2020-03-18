<template>
  <div class="whycont">
    <div class="why">
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="300">Why?</h1>
      <h2 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">Craft Beer</h2>
    </div>
    <div class="triple">
      <p
        class="tripleintro"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >If you are unsure whether you should take the step and start brewing your own craft beer, here are a few good reasons to consider before making a choice. But all reasons aside, simply put, selling your own beer is building the foundation for long-term strategy that will benefit your business and your customers alike.</p>

      <div class="card1" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div v-lazy-load class="img1"></div>
        <h3 class="copy1">
          <span>Make more</span>
          <br />with less
        </h3>
        <p class="bodycopy1">
          Beer in China is changing and it’s changing fast.
          Annual consumption volume is going down while overall market value keeps rising.
          Simply put, people drink less beer but pay more for each glass.
        </p>
      </div>

      <div class="card2" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div  v-lazy-load class="img2"></div>
        <h3 class="copy2">
          <span>Your Beer</span>
          <br />Your Brand
        </h3>
        <p
          class="bodycopy2"
        >In a world of a dime of a dozen, what better way to stand out from the crowd by having a unique beer on tap that no one else can offer. We at NanoCrafted help you with exactly that. From idea, to recipe to naming &amp; design, with us you can have the beer of your dreams on tap in no time.</p>
      </div>

      <div class="card3" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div v-lazy-load class="img3"></div>
        <h3 class="copy3">
          <span>Fresh &amp; locally</span>
          <br />brewed
        </h3>
        <p class="bodycopy3">
          A good beer needs to be freshly made with care from only the best natural ingredients. Due to the nature of our brewing process every batch is
          created on demand locally to ensure that each beer comes out clear and fresh for your guests to enjoy.
        </p>
      </div>
      <div class="pdf" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
        <p class="pdfcopy">
          New to Craft Beer and want to know more?
          <br />
          <br />Check out our whitepaper
          below for a dive into
          China’s rapidly growing
          Craft Beer market.
        </p>
        <a href="/NanoCrafted_Intro2020.pdf" class="myButton">Click Here</a>
      </div>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  }
}
</script>

<style scoped>
* {
  font-family: Lato;
  color: #353535;
  line-height: 1.5;
}
.whycont {
  height: auto;
  width: 100%;
  position: relative;
}

span {
  color: #ffffff;
}

.why {
  margin: auto;
  position: relative;
  top: -5%;
}
h1 {
  font-size: 10vw;
  font-weight: bold;

  text-align: center;
  background: -webkit-linear-gradient(#ff2f0f, #f28e1c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  font-size: 5vw;
  font-weight: bold;
  text-align: center;
}

.triple {
  width: 80%;
  margin: 3vw auto;
  position: relative;
  height: 100vw;
}

.tripleintro {
  position: relative;
  top: 5%;
  text-align: right;
  width: 50%;
  left: 50%;
  height: auto;
  font-weight: lighter;
  font-size: 0.9vw;
}

/* Card 1 */

.card1 {
  width: 27.5%;
  height: auto;
  position: absolute;
}
.img1 {
  height: 60vh;
  width: 100%;
  
  background-image: url("/reason1.jpg");
  background-size: cover;
  background-position-x: 70%;
}

.copy1 {
  width: 100%;
  padding-left: 10%;
  font-size: 3vw;
  position: relative;
  top: -4vw;
}

.bodycopy1 {
  width: 90%;
  padding-left: 10%;
  position: relative;
  font-weight: lighter;
  top: -3vw;
  font-size: 0.9vw;
}

/* Card 2 */

.card2 {
  width: 27.5%;
  height: auto;
  position: absolute;
  left: 36.25%;
  top: 22.5vw;
}
.img2 {
  height: 60vh;
  width: 100%;
  background-image: url("/reason2.jpg");
  background-size: cover;
}

.copy2 {
  width: 100%;
  font-size: 3vw;
  position: relative;
  top: -4vw;
  text-align: center;
}

.bodycopy2 {
  width: 90%;
  padding-left: 10%;
  position: relative;
  font-weight: lighter;
  top: -3vw;
  text-align: center;
  font-size: 0.9vw;
}

/* Card 3 */

.card3 {
  width: 27.5%;
  height: auto;
  position: absolute;
  left: 72.5%;
  top: 40vw;
}
.img3 {
  height: 60vh;
  width: 100%;
  background-image: url("/reason3.jpg");
  background-size: cover;
  background-position-x: 70%;
}

.copy3 {
  width: 100%;
  padding-right: 5%;
  font-size: 3vw;
  position: relative;
  top: -4vw;
  text-align: right;
}

.bodycopy3 {
  width: 95%;
  padding-left: 5%;
  position: relative;
  font-weight: lighter;
  top: -3vw;
  text-align: right;
  font-size: 0.9vw;
}
/* PDF CTA */

.pdf {
  position: absolute;
  top: 67vw;
  width: 20vw;
  margin-left: 2vw;
}

.pdfcopy {
  width: 100%;
  font-size: 1.5vw;
  font-style: italic;
  font-weight: lighter;
  background: -webkit-linear-gradient(#ff2f0f, #f28e1c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.myButton {
  box-shadow: 0px 1px 0px 0px #fff6af;
  background: linear-gradient(
    215deg,
    rgba(242, 142, 28, 1) 0%,
    rgba(255, 47, 15, 1)
  );
  background-color: #ffec64;
  border-radius: 6px;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.8vw;
  font-weight: bold;
  padding: 10px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
  text-align: center;
  width: 80%;
  margin: 5%;
  margin-top: 10%;
}

@media only screen and (max-width: 500px) {
  .why {
    margin: auto;
    position: relative;
    top: -5%;
    overflow: hidden;
  }

  .why h1 {
    font-size: 15vh;
  }

  .why h2 {
    font-size: 5vh;
    position: relative;
  }

  .tripleintro {
    font-size: 13pt;
    width: 80%;
    left: 10%;
    top: 2%;
    text-align: center;
    font-weight: normal;
  }

  .triple {
    height: 400vh;
    width: 100%;
    overflow-y: hidden;
  }

  .card1 {
    width: 100%;
    top: 12%;
  }

  .copy1 {
    font-size: 6vh;
    top: -10vh;
    font-weight: normal;
  }

  .copy2 {
    font-size: 6vh;
    top: -9vh;
    font-weight: normal;
  }

  .copy3 {
    font-size: 6vh;
    top: -9vh;
    font-weight: normal;
    height: auto;
  }

  .card2 {
    width: 100%;
    top: 37%;
    left: 0%;
  }

  .card3 {
    width: 100%;
    top: 64%;
    left: 0;
  }

  .bodycopy1 {
    font-size: 13pt;
    font-weight: normal;
    top: -8vh;
  }

  .bodycopy2 {
    font-size: 13pt;
    font-weight: normal;
    top: -8vh;
  }

  .bodycopy3 {
    font-size: 13pt;
    font-weight: normal;
    top: -8vh;
  }

  .pdf {
    top: 88%;
    width: 90%;
    margin: 5vh 0;
    left: 5%;
  }

  .pdfcopy {
    font-size: 12pt;
    width: 80%;
    text-align: center;
    background: -webkit-linear-gradient(#ff2f0f, #f28e1c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    margin: auto;
  }

  .myButton {
    width: 90%;
    margin: 5%;
    font-size: 20pt;
  }
}
</style>
<template>
  <div class="container">
    <div class="img" v-lazy-load data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300"></div>
    <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="300">
      The
      <br />
      <span class="offset">People</span>
    </h1>
    <div class="bodycopy" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
      <p>
        Dissatisfied with what bars have to offer currently when it comes to Craft Beer in China,
        NanoCrafted is built around the simple idea that everyone deserves their own great quality, natural craft beer.
      </p>
    </div>
    <div class="peopleholder">
      <h2 class="ogi" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">Ognjen Simovic</h2>
      <p
        class="Ogicopy"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="300"
      >Ogi holds a degree in engineering and biochemistry. His brewing experience originally started during student times with various homebrews. Yet to turn his passion into expertise he attended professional training at the Carlsberg brewery. Following his studies, he joined Dogma brewery, one of the largest breweries in Serbia, for a few years. Upon relocating to China, he worked with Zapfler and developed the beloved 2-4-8 from scratch.</p>
      <div
        class="people1" v-lazy-load
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="300"
      ></div>
      <div
        class="people2" v-lazy-load
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="300"
      ></div>
      <p class="bencopy" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">
        Ben has been in China for approximately 10 years working in marketing and branding at numerous agencies. Prior to opening his own agency,
        Black &amp; Zero, he was leading the strategy department at ASAP+, Deep Focus and Calling Brands. Over the years he had worked with brands such as Grey Goose, Moet, Chanel, Delta, Converse and more. As of the most recent related experience stands the rebranding of Zapfler.
      </p>
      <h2 class="ben" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300">Benjamin Müller</h2>
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
  height: 200vh;
  position: relative;
}

.img {
  position: absolute;
  width: 100%;
  height: 27vw;
  background-image: url("/people.jpg");
  background-size: cover;
  background-position-y: 45%;
  z-index: -1;
}

h1 {
  font-size: 6vw;
  color: #ffffff;
  position: absolute;
  top: 20vw;
  line-height: 1;
  left: 10vw;
}

.bodycopy {
  position: absolute;
  width: 45vw;
  height: auto;
  top: 37vw;
  left: 27.5%;
  text-align: center;
  font-size: 0.9vw;
  font-weight: lighter;
}

p {
  width: 100%;
}

.offset {
  position: relative;
  left: 7%;
}

/* People */

.peopleholder {
  width: 45%;
  height: 120vh;
  position: absolute;
  top: 70vh;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2%;
}

.people1 {
  height: 30vw;
  width: 20vw;
  background-image: url("/ogi.jpg");
  background-position-x: 70%;
  background-size: cover;
  position: absolute;
  top: 10%;
  right: 0;
}

.people2 {
  height: 30vw;
  width: 20vw;
  background-image: url("/ben.jpg");
  background-size: cover;
  background-position-x: 50%;
  top: 45%;
  left: 0;
  position: absolute;
}

.Ogicopy {
  top: 10%;
  position: absolute;
  width: 40%;
  font-size: 0.9vw;
  font-weight: lighter;
}

.bencopy {
  top: 41%;
  position: absolute;
  margin-top: 19vw;
  width: 40%;
  right: 0;
  text-align: right;
  font-size: 0.9vw;
  font-weight: lighter;
}

.ogi {
  position: absolute;
  top: 4%;
  right: 0;
  margin-right: 7%;
  text-align: right;
  font-size: 2vw;
  background: -webkit-linear-gradient(#ff2f0f, #f28e1c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ben {
  position: absolute;
  top: 92%;
  left: 0;
  margin-left: 7.5%;
  text-align: left;
  font-size: 2vw;
  background: -webkit-linear-gradient(#f28e1c, #ff2f0f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media only screen and (max-width: 500px) {
  .container {
    height: 345vh;
  }
  .img {
    height: 23%;
    background-position-x: 78%;
  }

  h1 {
    top: 20%;
    font-size: 10vh;
    line-height: 0.7;
  }

  .bodycopy {
    top: 28%;
    width: 80%;
    font-size: 13pt;
    font-weight: normal;
    left: 7.5%;
  }

  .peopleholder {
    width: 100%;
    top: 37%;
    display: flex;
    height: 214vh;
    position: relative;
  }

  .ogi {
    order: 1;
    font-size: 3.5vh;
    width: 100%;
    margin: 0;
    right: 0;
    transform: translateX(-50%);
    text-align: center;
    top: 0;
    position: relative;
  }

  .Ogicopy {
    width: 90%;
    left: 5%;
    order: 3;
    top: 24.5%;
    text-align: center;
    font-weight: lighter;
    font-size: 13pt;
    font-weight: normal;
  }

  .people1 {
    order: 2;
    width: 100%;
    height: 40vh;
    top: 3%;
    position: absolute;
        margin: 2vh 0;
  }

  .people2 {
    order: 5;
    width: 100%;
    height: 40vh;
    top: 53%;
    background-position-y: 40%;
            margin: 2vh 0;
  }

  .bencopy {
    width: 90%;
    right: 5%;
    order: 6;
    top: 70%;
    text-align: center;
    font-weight: lighter;
    font-size: 13pt;
    font-weight: normal;
  }

  .ben {
    order: 2;
    top: 50%;
    font-size: 3.5vh;
    width: 100%;
    margin: 0;
    right: 0;
    left: 0%;
    transform: translateX(-50%);
    text-align: center;
  }
}
</style>

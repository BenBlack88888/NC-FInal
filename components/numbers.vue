<template>
  <div class="container">
    <div class="img" v-lazy-load data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="300"></div>
    <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="300">
      The
      <br />
      <span class="offset">Numbers</span>
    </h1>
    <div
      class="bodycopy"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="300"
    >
      <p>
        As every beer is based on a custom recipe for each customer, ingredients and production methods are adjusted for each batch and can vary depending on the final requirements. In comparison, typical Craft Beer sales prices for consumers are above 120RMB per liter on average in China.
        In principle we offer each individual beer per batch in with minimum of 1000 liters. Further, we can provide additional ad hoc support for marketing and branding if requested.
      </p>
    </div>
    <div
      class="priceholder"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
    >
      <h2>Your custom Craft Beer with us starts at</h2>
      <div class="price">
        <h3>
          <span class="secondary">est.</span>35 RMB / Liter
        </h3>
      </div>
      <ul>
        <li>Recipe Design</li>
        <li>Ingredient Sourcing</li>
        <li>Brewing Process</li>
        <li>Quality Control</li>
        <li>Final Delivery</li>
      </ul>
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

.offset{
  position: relative;
  left: 5%;
}

.img {
  position: absolute;
  width: 100%;
  height: 27vw;
  background-image: url("/numbers.jpg");
  background-size: cover;
  background-position-y: 80%;
  z-index: -1;
}

h1 {
  font-size: 6vw;
  color: #ffffff;
  position: absolute;
  top: 20vw;
  line-height: 1;
  left: 9vw;
}

.bodycopy {
  position: absolute;
  width: 30vw;
  height: auto;
  top: 35vw;
  left: 10vw;
  font-weight: lighter;
}

/* Pricing */

.priceholder {
  position: absolute;
  width: 25vw;
  height: 25vw;
  top: 20vw;
  left: 60vw;
  background-color: #ffffff;
  border: 5px solid;
  border-image-source: linear-gradient(
    215deg,
    rgba(242, 142, 28, 1) 0%,
    rgba(255, 47, 15, 1)
  );
  border-image-slice: 1;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

h2 {
  font-size: 1vw;
  font-weight: lighter;
  text-align: center;
  padding-top: 5%;
  position: absolute;
  width: auto;
  top: 13%;
  width: 90%;
  left: 5%;
}

h3 {
  font-size: 2.6vw;
  font-weight: bold;
  text-align: center;
  width: 93%;
  color: #353535;
  position: absolute;
  top: 29%;
  font-kerning: initial;
  margin-left: 1vw;
}

.secondary {
  font-size: 0.5em;
  font-weight: bolder;
}

ul {
  position: absolute;
  top: 50%;
  width: 50%;
  left: 46%;
  transform: translateX(-50%);
  line-height: 2.5;
  font-size: 1.4vw;
  font-weight: lighter;
  flex-wrap: wrap;
}

li {
  width: 100%;
  text-align: center;
  margin-right: 5%;
  line-height: 1.8;
  font-size: 0.8em;
  align-self: center;
}

@media only screen and (max-width: 500px) {
  .container {
    height: 220vh;
  }
  .img {
    height: 36%;
    background-position-x: 11%;
  }

  h1 {
    top: 31.5%;
    font-size: 9vh;
    line-height: 0.7;
    left: 5%;
  }

  .bodycopy {
    font-size: 13pt;
    font-weight: normal;
    width: 80%;
    top: 44%;
    left: 10%;
    text-align: left;
  }

  p {
    width: 100%;
  }

  .priceholder {
    top: 75%;
    width: 70vw;
    height: 70vw;
    left: 15%;
    margin: 2% 0% 5% 0;
    overflow-y: hidden;
  }

  h2 {
    font-size: 14pt;
    font-weight: bolder;
    position: absolute;
    top: 2%;
    line-height: 1;
  }

  h3 {
    font-size: 8vw;
    background: -webkit-linear-gradient(#ff2f0f, #f28e1c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bolder;
    width: 100%;
    top: 26%;
  }

  .secondary {
    font-size: 12pt;
    font-weight: bolder;
  }

  ul {
    left: 43%;
    width: 100%;
  }

  li {
    font-size: 10pt;
    font-weight: bolder;
    width: 100%;
  }

  .offset{
      left: 10%;
  }
}
</style>

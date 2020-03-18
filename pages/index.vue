<template>

<div class="main">
  <Hero  />
  <Intro />
  <Reasons />
  <Method />
  <Numbers />
  <People />
  <CTA />
  <!-- <test/> -->
</div>

</template>

<script>
import Hero from '~/components/Hero.vue'
import Intro from '~/components/intro.vue'
import Reasons from '~/components/reasons.vue'
import Method from '~/components/method.vue'
import Numbers from '~/components/numbers.vue'
import People from '~/components/people.vue'
import CTA from '~/components/CTA.vue'
import test from '~/components/test.vue'

export default {
  components: {
    Hero,
    Intro,
    Reasons,
    Method,
    Numbers,
    People,
    CTA,
    test
  },
  
  data () {
    return {
      title: 'NanoCrafted Home'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'Craft Beer', name: 'Custom, Craft, Beer', content: 'Custom Craft Beer in China by NanoCrafted' }
      ]
    }
  }
}
</script>

<style>
::-webkit-scrollbar {
display: none;
}

* {
  -ms-overflow-style: none;
  width: 100vw;
  overflow-x: hidden;
  
}

</style>

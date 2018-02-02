<template>
  <div class="container banner">
    <banner :listImg="listImg"></banner>
    <!-- <slide></slide>
    <content-a></content-a> -->
    <pro-list></pro-list>
    <footer-nav></footer-nav>
  </div>
</template>

<script>

import Banner from '../../components/bannerPic'
import FooterNav from '../../components/Footer'
import ProList from '../../components/productList'
// import Slide from '../../components/slide.vue'
// import ContentA from '../../components/content.vue'

import a from '../../assets/images/banner.jpg'
import b from '../../assets/images/banner.jpg'
import c from '../../assets/images/banner.jpg'

export default {
  name: 'container',
  data () {
    return {
      listImg: [{
          url: a
      }, {
          url: b
      }, {
          url: c
      }]
    }
  },
  components: {
    FooterNav,Banner,ProList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  
</style>

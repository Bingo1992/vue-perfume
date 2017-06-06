<template>
  <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>


<script>

import Swiper from 'swiper';
import '../assets/css/swiper.min.css';
export default {
    name: 'swiper-container',
    data () {
      return {
      
      }
    },
    props: ['listImg'],
    mounted() {
        // console.log('mounted', this)
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            speed: 600,
            autoplay: 4000,
            onTouchEnd: function() {
                swiper.startAutoplay()
            }
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.swiper-container {
    width: 100%;
    height:7.5rem;
    .swiper-wrapper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
        // background-size: 100% 100%;
        object-fit:fill;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .swiper-pagination-bullet {
        width: .4rem;
        height: .4rem;
        display: inline-block;
    }
}
</style>

<template>
  <div class="order banner">
    <h1>{{ msg }}</h1>
    <footer-nav></footer-nav>
  </div> 
</template>

<script>
import FooterNav from '../../components/Footer'
export default {
  name: 'order',
  data () {
    return {
      msg: 'I am order'
    }
  },
  components: {
    FooterNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/scss/var.scss';
</style>

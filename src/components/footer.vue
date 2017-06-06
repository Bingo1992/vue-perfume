<template>
   <ul class="nav-bar flex-layout fixed-bottom">
    <li>
      <router-link to="/home">
        <i class="icon-home_1"></i>
        <p>首页</p>
      </router-link>
    </li>
    <li>
      <router-link to="/cart">
        <i class="icon-cart"></i>
        <p>购物车</p>
      </router-link>
    </li>
    <li>
      <router-link to="/order">
        <i class="icon-order"></i>
        <p>订单</p>
      </router-link>
    </li>
    <li>
      <router-link to="/personal">
        <i class="icon-user_1"></i>
        <p>我的</p>
      </router-link>
    </li>
   </ul> 

</template>


<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/var.scss";
.fixed-bottom {
  @extend %fixed-bottom;
}
// 底部导航
.nav-bar {
  background-color: #f9f9f9;
  li {
    -webkit-box-orient:vertical;
    padding: 4px 0;
  }
  i {
    color: #d5dadd;
    font-size: 28px;
  }
  a {
    color: #999;
  }
  &:after {
    @extend %mini-border;
    border-top: 1px solid $border-color;
  }
}
.router-link-active p,.router-link-active i{
    color: $color-theme;
  } 
</style>

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
        <span v-if="cartNum && cartNum!=0" class="circlePoint">{{cartNum}}</span>
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
import {mapState, mapMutations} from 'vuex'
import {getCartList} from 'service/getData'
import { setStore, removeStore } from 'utils/storage'
export default {
  name: 'nav-bar',
  data () {
    return {
      // cartAmount: 0
    }
  },
  // props: ['cartAmount'],
  computed: {
    ...mapState(['userInfo','cartList']),
    cartNum () {
      let cartNum = 0;
      if(this.userInfo) {
       
        this.cartList && this.cartList.forEach( item => {
           cartNum += item.proNum;
        })
        return cartNum;
      }
    } 
  },
  mounted() {
     if(this.userInfo){
      this._getCartList();
     }else {
      this.INIT_BUYCART();
     }
  },
  methods:{
    ...mapMutations(['INIT_BUYCART', 'EDIT_CART']),
    // 登陆时获取一次购物车商品
    _getCartList () {
      getCartList().then(res => {
        setStore('buyCart', res.result);
        // 重新初始化一次本地数据
      }).then(this.INIT_BUYCART);
    },
  }
  // watch: {
  //   userInfo: function (value) {
  //       if (value) {
  //           this.initData();
  //       }
  //   }
  // }

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
.nav-bar .router-link-active{
  p, i{
    color: $color-theme;
  }
}
   
</style>

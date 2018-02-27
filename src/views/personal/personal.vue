<template>
  <div class="personal banner">
    <section class="person-top">
       <router-link :to="userInfo? '/personal' : '/login'" class="list-box">
          <div class="per-img">
              <img :src="userInfo? userInfo.portraitUrl : imgSrc">
          </div>
          <div class="list-info">
              <h4>{{userInfo? userInfo.username : '登录'}}</h4>
              <p>{{userInfo? userInfo.mobile : "登录后享受更多特权"}}</p>
          </div>
      </router-link>
    </section>

    <!-- 列表 -->
    <ul class="border-list">
        <li>
            <router-link class="list-box" :to="userInfo? '/order' : '/login'">
                <i class="icon-order"></i>
                <span class="list-info">
                    <h4>我的订单</h4>
                </span>
                <i class="icon-right"></i>
            </router-link>
        </li>
        <li>
            <router-link class="list-box"  :to="userInfo? '/addressManage': '/login'">
                <i class="icon-set"></i>
                <span class="list-info">
                    <h4>地址管理</h4>
                </span>
                <i class="icon-right"></i>
            </router-link>
        </li>
        <li>
            <router-link class="list-box" to="/">
                <i class="icon-help"></i>
                <span class="list-info">
                    <h4>帮助中心</h4>
                </span>
                <i class="icon-right"></i>
            </router-link>
        </li>
    </ul>
     <div class="address">
      <router-view></router-view>
    </div>
    <footer-nav></footer-nav>
    
  </div> 
</template>

<script>
import FooterNav from 'components/Footer'
import src from "assets/images/pic.png";
import {mapState} from 'vuex'
export default {
  name: 'personal',
  data () {
    return {
        imgSrc: src
    }
  },
  components: { 
    FooterNav
  },
  computed: {
    ...mapState([
        'userInfo'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/scss/var.scss';
.person-top {
    background: -webkit-linear-gradient(top,#fe017e,#fa263e);
    padding: 10px 0;
    .list-info p {
        opacity: .7;  
        color: #fff;  
    }
    a{
      color: #fff;  
    }
}
.per-img {
    position: relative;
    width: auto;
    height: 60px;
    margin: $gauge 0;
    img{
         @include circle(60px);
        border: 2px solid #fff;
        margin-right: .3rem;
        box-sizing: border-box;
    }

}
</style>

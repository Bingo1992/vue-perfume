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

   <!--  <div class="bg-show">
        <a class="list-box" href="order_list.html">
            <i class="icon-order"></i>
            <span class="list-info">
                <h4>我的订单</h4>
            </span>
            <span class="font-gray">查看全部订单</span>
            <i class="icon-right"></i>
        </a>
        <ul class="flex-layout border-top">
            <li>
                <a href="#">
                    <i class="icon-pay"></i>
                    <p>代付款订单</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="icon-flow"></i>
                    <p>待收货订单</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="icon-commet"></i>
                    <p>待评价订单</p>
                </a>
            </li>
        </ul>
    </div> -->

    <!-- 列表 -->
    <ul class="border-list">
        <li>
            <router-link class="list-box" to="/order">
                <i class="icon-order"></i>
                <span class="list-info">
                    <h4>我的订单</h4>
                </span>
                <i class="icon-right"></i>
            </router-link>
        </li>
        <li>
            <a class="list-box" href="#">
                <i class="icon-set"></i>
                <span class="list-info">
                    <h4>地址管理</h4>
                </span>
                <i class="icon-right"></i>
            </a>
        </li>
        <li>
            <a class="list-box" href="#">
                <i class="icon-help"></i>
                <span class="list-info">
                    <h4>帮助中心</h4>
                </span>
                <i class="icon-right"></i>
            </a>
        </li>
    </ul>
     
    <footer-nav></footer-nav>
  </div> 
</template>

<script>
import FooterNav from '../../components/Footer'
import src from "../../assets/images/pic.png";
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
    ]),
    imgpath() {

    }
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

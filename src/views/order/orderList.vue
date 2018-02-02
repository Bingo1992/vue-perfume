<template>
  <div class="order banner">

    <div v-if="!userInfo" class="nothing">
      <i class="bg-red icon-gantan"></i>
      <p>请<router-link class="font-blue lg-font" to="/login">登录</router-link>后查看更多信息</p>
    </div>

    <div v-if="userInfo">
      <div class="fixed-top">
        <ul class="nav-tabs flex-layout bg-show border-bottom">
          <li v-for="(item,index) in tabs" :class="{active:index == num}" @click="changeTab(index)">{{item}}</li>
        </ul>
      </div>
        
      <div class="banner-bt">
          <ul v-show="num == 0">
              <li class="nothing" v-if="orderList1.length == 0">
                  <i class="icon-order"></i>
                  <h4>暂无相关订单</h4>
              </li>
              <li class="border-list" v-for="(item1,idx1) in orderList1">
                  <label class="list-title list-box border-bottom">
                      <span class="list-info">
                          <h4>订单号：<span class="font-gray">{{item1.ordNum}}</span></h4>
                      </span>
                      <span class="font-theme">{{item1.status}}</span>
                  </label>
                  <ul>
                      <li class="list-box" v-for="(itm1,idx11) in item1.list">
                          <img class="list-img" :src="itm1.images">
                          <div class="list-info">
                              <h4 class="nowrap-2">{{itm1.title}}</h4>
                              <p>已选择：{{itm1.attr}}</p>
                              <p>
                                数量：<span class="num">{{itm1.count}}</span>
                                价格：<span class="font-theme">￥ <span>{{itm1.price}}</span></span>
                              </p>
                          </div>
                      </li>
                  </ul>
                  <div class="btn-pay" v-if="item1.status=='待付款'">
                     <router-link class="btn-theme" :to="{path:'orderPay'}">去付款</router-link>
                  </div>
                  <div class="btn-pay" v-if="item1.status=='待收货'">
                     <div class="btn-theme">确认收货</div>
                  </div>
              </li>
          </ul>

          <ul v-show="num == 1">
              <li class="nothing" v-if="orderList2.length == 0">
                  <i class="icon-order"></i>
                  <h4>暂无相关订单</h4>
              </li>
              <li class="border-list" v-for="(item2,idx2) in orderList2">
                  <label class="list-title list-box border-bottom">
                      <span class="list-info">
                          <h4>订单号：<span class="font-gray">{{item2.ordNum}}</span></h4>
                      </span>
                      <span class="font-theme">{{item2.status}}</span>
                  </label>
                  <ul>
                      <li class="list-box" v-for="(itm2,idx22) in item2.list">
                          <img class="list-img" :src="itm2.images">
                          <div class="list-info">
                              <h4 class="nowrap-2">{{itm2.title}}</h4>
                              <p>已选择：{{itm2.attr}}</p>
                              <p>
                                数量：<span class="num">{{itm2.count}}</span>
                                价格：<span class="font-theme">￥ <span>{{itm2.price}}</span></span>
                              </p>
                          </div>
                      </li>
                  </ul>
                  <div class="btn-pay">
                     <router-link class="btn-theme" :to="{path:'orderPay'}">去付款</router-link>
                  </div>
              </li>
          </ul>

          <ul v-show="num == 2">
              <li class="nothing" v-if="orderList3.length == 0">
                  <i class="icon-order"></i>
                  <h4>暂无相关订单</h4>
              </li>
              <li class="border-list" v-for="(item3,idx3) in orderList3">
                  <label class="list-title list-box border-bottom">
                      <span class="list-info">
                          <h4>订单号：<span class="font-gray">{{item3.ordNum}}</span></h4>
                      </span>
                      <span class="font-theme">{{itm3.status}}</span>
                  </label>
                  <ul>
                      <li class="list-box" v-for="(itm3,idx33) in item3.list">
                          <img class="list-img" :src="itm3.images">
                          <div class="list-info">
                              <h4 class="nowrap-2">{{itm3.title}}</h4>
                              <p>已选择：{{item3.attr}}</p>
                              <p>
                                数量：<span class="num">{{itm3.count}}</span>
                                价格：<span class="font-theme">￥ <span>{{itm3.price}}</span></span>
                              </p>
                          </div>
                      </li>
                  </ul>
                  <div class="btn-pay">
                     <div class="btn-theme">确认收货</div>
                  </div>
              </li>
          </ul>    
      </div>
    </div>
    <footer-nav></footer-nav>
  </div> 
</template>

<script>
import FooterNav from '../../components/Footer'
import {orderList} from '../../service/getData'
import {mapState} from 'vuex'
export default {
  name: 'order',
  data () {
    return {
      tabs: ["全部","待付款","待收货"],
      num: 0,
      orderList1:[],
      orderList2:[],
      orderList3:[]
    }
  },
  computed: {
    ...mapState([
        'userInfo'
    ])
  },
  components: {
    FooterNav
  },
  mounted(){
    this.getOrderList();
  },
  methods: {
    //选项卡
    changeTab(index) {
      this.num = index;
    },
    async getOrderList(){
      let order = await orderList();
      let data = order.result;
      data.forEach((elm, index) => {
         if(elm.statusId == 0){
            this.orderList1 = elm.order;
         }else if(elm.statusId == 1){
            this.orderList2 = elm.order;
         }else if(elm.statusId == 2){
            this.orderList3 = elm.order;
         }
      });
   
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/scss/var.scss';
.nav-tabs {
  font-size: 12px;
  .active {
    color: $color-theme;
    &:after{
      display: block;
      content: "";
      height: 6px;
      line-height: 6px;
      border-radius: 6px;
      width: 6px;
      text-align: center;
      background-color: #fe007f;
      position: absolute;
      bottom: 6px;
      left: 50%;
      margin-left: -3px;
    }
  }
}
.btn-pay {
  overflow: hidden;
  padding: 10px;
  .btn-theme {
    float: right;
    width: 80px;
    @include height(30px);
  }
}
</style>

<template>
  <div class="orderConfirm banner">
    <loading v-if="showLoading"></loading>

    <section v-if="!showLoading">
        <div class="logistics bg-show">   
            <router-link to="/chooseAddress" class="list-box">
                <div class="list-info" v-if="!choosedAddress">请添加一个收获地址</div>
                <div v-else class="list-info">
                    <h4>
                        <span class="pdr">{{choosedAddress.name}}</span>
                        <span>{{choosedAddress.mobile}}</span>
                    </h4>
                    <p class="gray-font nowrap">{{choosedAddress.address_detail}}</p>
                </div>  
                <i class="icon-right"></i>
            </router-link>
        </div>

        <!-- 订单列表 -->
        <div class="border-list">
            <div class="title-bar border-bottom">
              <h4>商品信息</h4>
            </div>
            <ul>
                <li class="list-box" v-for="(item,i) in cartList" :key="i" v-if="item.check">
                    <img class="list-img" :src="item.proImg">
                    <div class="list-info">
                        <h4 class="nowrap-2">{{item.proName}}</h4>
                        <p>已选择：{{item.proAttr}}</p>
                        <p>
                            数量：<span class="num pdr">{{item.proNum}}&nbsp;&nbsp;</span>
                            价格：<span class="font-theme">￥{{item.proPrice}}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>   

        <div class="border-list">
            <div class="title-bar border-bottom">
              <h4>支付方式</h4>
            </div>
            <ul>
                <li class="list-box">
                 <img class="list-img" src="../../assets/images/chat.png" style="height:40px">
                  <p class="list-info">微信支付</p>
                   <label class="checkbox">
                      <input type="radio" checked readonly>
                      <i class="icon-hook"></i>
                  </label>
                </li>
            </ul>
        </div>   


        <div class="actionBar-container1 list-box border-top">
            <div class="list-info pdl">
                <span>应付总额：<span class="font-theme">￥{{checkPrice}}</span></span>
            </div> 
            <router-link to="/orderPay" class="btn-theme">提交订单</router-link>
        </div> 
    </section>
    
  </div> 
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import loading from 'components/loading'
    import {addressList, getCartList, proDetail} from 'service/getData'
    import { getStore } from 'utils/storage'
    export default {
      name: 'orderConfirm',
      data () {
        return {
            showLoading: false, //显示加载中  
            cartList:[],
            proId: '',
            num:''
        }
      },
      components: {
        loading
      }, 
      mounted() {
         this._initData();
      },
      computed: {
          ...mapState(['choosedAddress']),
          // 选中的总价格
          checkPrice () {
            let totalPrice = 0
            this.cartList && this.cartList.forEach(item => {
              if (item.check) {
                totalPrice += (item.proNum * item.proPrice);
              }
            })
            return totalPrice;
         }
      },
      methods: {
       ...mapMutations(['CHOOSE_ADDRESS']),
        //获取商品数据
        _initData() {
            if (this.$route.query.skuId) {
                this.cartList = JSON.parse(getStore('buyPro'));
            } else {
                // this._getCartList();
                // 测试环境使用
                this.cartList = JSON.parse(getStore('buyCart'));
            }
             this._initAddress();
        },
         // 获取地址
        async _initAddress() {
            let address = await addressList();
            if(address.length > 0){
                address.forEach((ads, index) => {
                    if(ads.userDefault){
                        this.CHOOSE_ADDRESS(ads);
                    }
                });
            }
        },
        // 购物车数据
        _getCartList () {
            // 生产环境下使用
            getCartList().then(res => {
              this.cartList = res.result
            })
        },

      },
      watch: {
        userInfo: function (value) {
            if (value && value.user_id) {
                this._initAddress();
            }
        }
      }
     
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.actionBar-container1 {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #fff;
}
</style>

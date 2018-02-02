<template>
  <div class="orderConfirm">
    <loading v-if="showLoading"></loading>

    <section v-if="!showLoading">
        <div class="logistics bg-show">   
            <router-link :to='{path:"/orderConfirm/chooseAddress"}' class="list-box">
                <div class="list-info" v-if="!chooseAddress">请添加一个收获地址</div>
                <div v-else class="list-info">
                    <h4>
                        <span class="pdr">{{chooseAddress.name}}</span>
                        <span>{{chooseAddress.mobile}}</span>
                    </h4>
                    <p class="gray-font nowrap">{{chooseAddress.address_detail}}</p>
                </div>  
                <i class="icon-right"></i>
            </router-link>
        </div>

        <!-- 订单列表 -->
        <div class="border-list">
            <ul>
                <li>
                    <a class="list-box" href="#">
                        <img class="list-img" src="img/pic2.jpg">
                        <div class="list-info">
                            <h4 class="nowrap-2">邂逅清新淡香水配方</h4>
                            <p>已选择：</p>
                            <p>
                                数量：<span class="num">2</span>
                                价格：<span class="theme-font">￥ <span>250</span></span>
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>    
    </section>
    
  </div> 
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import loading from '../../components/loading'
    import {addressList} from '../../service/getData'
    export default {
      name: 'orderConfirm',
      data () {
        return {
            showLoading: false, //显示加载中  
            chooseAddress: null
        }
      },
      components: {
        loading
      }, 
      mounted() {
            this.getAddress();
      },
      methods: {
        async getAddress() {
            let address = await addressList();
            if(address.length > 0){
                address.forEach((ads, index) => {
                    if(ads.userDefault){
                        this.chooseAddress = ads;
                    }
                });
            }
        }
      }
      
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/scss/var.scss';
</style>

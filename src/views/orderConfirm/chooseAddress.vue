<template>
  <div class="chooseAddress">
    <loading v-if="showLoading"></loading>

    <section v-if="!showLoading">
       
        <!-- 地址列表 -->
        <ul class="address-list border-list">
            <li class="list-box" v-for="(item,i) in address" :key="item.addID">
                <label class="checkbox">
                    <input type="radio" name="address" v-model="item.userDefault" :value="item.userDefault" @click="">
                    <i class="icon-hook"></i>
                </label>
                <div class="list-info">
                    <div class="list-info">
                        <span>{{item.name}}</span>
                        <span>{{item.mobile}}</span>
                        <p>{{item.address_detail}}</p>
                    </div>
                </div>
                <i class="icon-delete"></i>
            </li>
        </ul>
        <div class="btn">
          <router-link class="btn-theme" to="/addAddress">+新增地址</router-link>
        </div>
    </section>
    
  </div> 
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import loading from 'components/loading'
    import {addressList} from 'service/getData'
    export default {
      name: 'chooseAddress',
      data () {
        return {
            showLoading: true, //显示加载中  
            chooseAddress: null,
            address:[],
        }
      },
      components: {
        loading
      }, 
      mounted() {
       this.getAddress();
      },
      computed: {
       
      },
      methods: {
        // 获取地址
        async getAddress() {
            this.address = await addressList();
            this.showLoading = false;
        },

       
      }
  
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>

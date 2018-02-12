<template>
  <div class="chooseAddress">
    <loading v-if="showLoading"></loading>

    <section v-if="!showLoading">
       
        <!-- 地址列表 -->
        <ul class="address-list border-list">
            <li class="list-box" v-for="(item,i) in address" :key="item.addID">
                <label class="checkbox" for="address1">
                    <input type="radio" name="address" id="address1" v-model="item.userDefault">
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
          <router-link class="btn-theme">+新增地址</router-link>
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
       this._getAddress();
      },
      computed: {
        getAddress() {
          this._getAddress(); 
        }
        
      },
      methods: {
        // 获取地址
        async _getAddress() {
            this.address = await addressList();
            console.log(this.address)
            this.showLoading = false;
        }
       
      }
  
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>

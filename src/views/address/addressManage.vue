<template>
  <div class="chooseAddress">
    <loading v-if="showLoading"></loading>

    <section v-if="!showLoading">
        <!-- 地址列表 -->
        <ul class="address-list" v-if="address.length">
            <li class="bg-show"  v-for="(item,i) in address" :key="item.addID">
                <div class="rich-box border-bottom">
                    <span>{{item.name}}</span>
                    <span>{{item.mobile}}</span>
                    <p>{{item.address_detail}}</p>
                </div>
                <div class="list-box">
                    <div class="list-info">
                       <label class="checkbox">
                          <input type="radio" :value="i" v-model="defaultIndex" @change="changeDefault(item,i)">
                          <i class="icon-hook"></i> 
                          <span> {{defaultIndex == i? '默认地址':'设为默认'}}</span> 
                      </label>
               
                    </div>
                     
                    <div class="new-addr-btn">
                        <span class="font-gray pdr"  @click="showConfirmDialog(item.addID)"><i class="icon-delete"></i></span>
                        <router-link class="font-gray pdl" :to="{path:'/addressManage/addAddress',query:{addressId:item.addID}}"><i class="icon-edit"></i></router-link>
                    </div>
                </div>
            </li>
        </ul>
           
        <div class="nothing" v-else>
            <i class="icon-map"></i>
            <h4>您还未添加地址</h4>
        </div>
         
        <div class="btn">
          <router-link class="btn-theme" to="/addressManage/addAddress">+新增地址</router-link>
        </div>
    </section>
    <confirm-dialog v-if="showDialog" :confirm-text="confirmText" showBtn="true" @closeConfirmDialog="closeConfirmDialog" @confirmBtn="delAddress"></confirm-dialog>

    <transition name="router-slid" mode="out-in">
        <router-view></router-view>
    </transition>  
  </div> 
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import loading from 'components/loading'
    import {addressList,delAddress,updateAddress} from 'service/getData'
    import confirmDialog from 'components/confirmDialog'
    export default {
      name: 'chooseAddress',
      data () {
        return {
            showLoading: true, //显示加载中  
            address:[],
            showDialog: false,
            confirmTitle:'',
            confirmText:'',
            currentID:'',
            defaultIndex: 0
        }
      },
      components: {
        loading, confirmDialog
      }, 
      mounted() {
       this.getAddress();

      },
      methods: {
        // 获取地址
        async getAddress() {
            this.address = await addressList();
            this.showLoading = false;
            this.address && this.address.forEach((elm, index) => {
                if(elm.userDefault === true){
                    this.defaultIndex = index;
                }
            });
        },
        //删除地址
        delAddress() {
            delAddress(this.currentID).then(res => {
              this.address.forEach((elm, index) => {
                 if(elm.addID === this.currentID) {
                    this.address.splice(index,1);
                 }
              });
            });
        },
        // 修改默认地址
        changeDefault(item,i) {
         
        },
        //显示遮罩
        showConfirmDialog(id) {
          this.showDialog = true;
          this.confirmText = "确定删除该地址吗？";
          this.currentID = id;
        },
        //关闭遮罩
        closeConfirmDialog() {
          this.showDialog = false;
        },
       
      }
  
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}
</style>

<template>
  <div>
    <loading v-if="showLoading"></loading>

    <div v-if="!userInfo" class="nothing">
      <i class="bg-red icon-gantan"></i>
      <p>请<router-link class="font-blue lg-font" to="/login">登录</router-link>后查看更多信息</p>
    </div>
    
    <div v-if="!showLoading && userInfo" class="cart banner">

      <div v-if="!cartList || cartList.length == 0" class="nothing">
        <i class="icon-cart font-theme"></i>
        <h3>购物车暂无内容</h3>
        <router-link class="font-blue" to="/home">去商城首页逛逛</router-link>
      </div>
      <ul v-if="cartList.length > 0" class="cart-list border-list">
          <li class="list-box" v-for="(cart,index) in cartList">
                <label class="checkbox">
                    <!-- <input type="checkbox" name="checkbox" v-model="cart.checked"  @click="selectPro(cart)"> -->
                    <input type="checkbox" name="checkbox" :value="cart.check" v-model="cart.check"  @change="selectPro(cart.proID, cart.check)">
                    <i class="icon-hook"></i>
                </label>
                <img class="list-img" :src="cart.proImg">
                <div class="list-info">
                    <div class="list-box">
                        <div class="list-info">
                            <h4 class="nowrap">{{cart.proName}}</h4>
                            <p>已选择：{{cart.proAttr}}</p>
                        </div>
                        <i class="delete icon-cancel" @click="showConfirmDialog(cart.proID)"></i>
                    </div>
                    <div class="list-box">
                        <p class="list-info">价格：
                            <span class="font-theme">￥{{cart.proPrice}}</span>
                        </p>
                        <div class="amount">
                            <span class="minus icon-minus" @touchstart="changeAmount(cart.proID, -1, cart.check)"></span>
                            <input type="number" class="count"  v-model.number="cart.proNum" >
                            <span class="plus icon-plus" @touchstart="changeAmount(cart.proID, 1, cart.check)"></span>
                        </div>
                    </div>
                </div>
          </li>
      </ul>

      <div v-if="cartList.length > 0" class="actionBar-container list-box border-top">
          <label class="all-check">
              <input type="checkbox" :value="checkAllFlag" v-model="isCheckAll" @change="selectAll()">
              <i class="icon-hook"></i>
              全选
          </label>
          <div class="list-info pdl">
              <span>合计：<span class="font-theme">￥{{calcTotalMoney}}</span></span>
          </div>
          <router-link :class="[{ disbtn: calcTotalMoney==0 }, 'btn-theme']" to="/orderConfirm">立即购买</router-link>
      </div>
    </div>
    <footer-nav></footer-nav>

    <confirm-dialog v-if="showDialog" :confirm-text="confirmText" showBtn="true" @closeConfirmDialog="closeConfirmDialog" @confirmBtn="confirmBtn"></confirm-dialog>
     
  </div>
</template>

<script>
import loading from 'components/loading'
import FooterNav from 'components/Footer'
import confirmDialog from 'components/confirmDialog'
import {getCartList,editCart,delCart,editCheckAll} from 'service/getData'
import { setStore } from 'utils/storage'
import {mapState,mapMutations} from 'vuex'

export default {
  data () {
    return { 
      showLoading: true,
      isCheckAll: true,//全选
      flag: true,
      showDialog: false,
      confirmTitle:'',
      confirmText:'',
      currentID: '',//点击的当前元素id
      checks:[],
      cartNum: 0//购物车数量
    }
  },
  components: {
    FooterNav,loading,confirmDialog
  },
  mounted() {
      this.initData();
  },
  computed: {
    ...mapState([
        'userInfo','cartList'
    ]),
    // 监控总价格
    calcTotalMoney() {
      return this._calcTotalMoney();
    },
     // 是否全选
    checkAllFlag() {
      if(this.checkedCount === this.cartList.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
      return this.isCheckAll;
    },
    // 勾选的数量
    checkedCount(){
      var i = 0;
       this.cartList && this.cartList.forEach((item) => {
          if(item.check) i++;    
       });
       return Number(i);
    }

  },
  methods: {
    ...mapMutations([
        'INIT_BUYCART', 'EDIT_CART', 'DELETE_CART'
    ]),
    initData() {
      // if(this.userInfo){
      //    let res = await cartList();
      //    this.cartList = res.result.proList;
      //    this.showLoading = false;
      // } else {
      //    this.showLoading = false;
      // }
      if(this.userInfo) {
        getCartList().then(res => {
          if(res.status === "1"){
            setStore('buyCart', res.result);
          }
          // 重新初始化一次本地数据
        }).then(this.INIT_BUYCART);
        // this.INIT_BUYCART();
        this.showLoading = false;
      } else {
         this.showLoading = false;
      }
       
    },
    // 修改购物车
    _editCart(proID,type,check) {
       editCart({proID}).then( res => {
          this.EDIT_CART({proID, type,check});
       });
    },
    //修改数量
    changeAmount(proID, type, check) {
      // if(value > 0){
      //   cart.proNum++; 
      // }else if(cart.proNum > 1){
      //    cart.proNum--;
      // }  
      this._editCart(proID, type, check);
      // this.calcTotalMoney();
    },
    
    //勾选产品
    selectPro(proID, check) {
       this._editCart(proID, 0, check);
       // this._isCheckAll();      
       // this.calcTotalMoney();
      // this.flag = true;
      // this.cartList.forEach((elm) => {
      //   if(!elm.checked){
      //     this.flag = false;
      //   }
      // });
      // if(this.flag){
      //   this.checkAll = true;
      // }else{
      //   this.checkAll = false;
      // }   
           
    },

    //全选
    selectAll () {
      // console.log(this.checkAll)
      let checkAll = !this.checkAllFlag;
      editCheckAll({checkAll: checkAll}).then(res => {
        this.EDIT_CART({check: checkAll});
      })
      // var i = 0;
      //  this.cartList && this.cartList.forEach((item) => {
      //     if(item.check === true) i++;
      //  });
      //  if(i == this.cartList.length) {
      //      this.checkAll = true;
      //  } else {
      //     this.checkAll = false;
      //  }

      // this.calcTotalMoney();
         
    },
    //显示遮罩
    showConfirmDialog(id) {
      this.showDialog = true;
      this.confirmText = "确定删除该购物车吗？"
      this.currentID = id;
    },
    //删除购物车
    confirmBtn() {
        delCart(this.currentID).then( res => {
           this.DELETE_CART(this.currentID);
         });

       // this.cartList && this.cartList.forEach((item) => {
          // if(item.proID === this.currentID){
            // this.DELETE_CART({this.proID});
          // }
       // });
      // this.checks.forEach((check, index) => {
      //     if(check === this.cartList[this.currentIndex].proID){
      //       this.checks.splice(index,1);
      //     }
      // });
      // this.cartList.splice(this.currentIndex,1);
      
      // this.calcTotalMoney();
    },
    //关闭遮罩
    closeConfirmDialog() {
      this.showDialog = false;
    },
    //合计
    _calcTotalMoney() {
      let total_price = 0;
      
      this.cartList && this.cartList.forEach((item,i) => {
        if(item.check) {
         total_price += item.proNum * item.proPrice;
        }
      });
      return total_price;
    },
  },
  watch: {
    'userInfo':'initData'
    // userInfo: function (value) {
    //     if (value && userInfo.user_id) {
    //         this.initData();
    //     }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/scss/var.scss';
.banner {
  margin-bottom: 120px;
}
  
// .nothing {
//     @include box;
//     height: 100%;
//     position: absolute;
//     width: 100%;
//     top: -26px;
//     .icon-cart {font-size: 46px;}
// }

.cart-list {
    .list-info .list-box {
        padding: 5px 0;
    }

    .delete{
        margin-left:.5rem;
        margin-right: 0;
        color:#dadada;
        @include circle(28px);
        width: 28px;
        border: 1px solid #dadada;
        font-size: 18px;
        position: absolute;
        right: 0;
        top: 0;
    }
}

.amount {margin: -3.5px 0;}
.actionBar-container {
  position: fixed;
  width: 100%;
  bottom: 53px;
  background-color: #fff;
}

</style>

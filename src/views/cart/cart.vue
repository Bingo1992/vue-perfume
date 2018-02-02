<template>
  <div>
    <loading v-if="showLoading"></loading>

  <!--   <div v-if="!userInfo" class="nothing">
      <i class="bg-red icon-gantan"></i>
      <p>请<router-link class="font-blue lg-font" to="/login">登录</router-link>后查看更多信息</p>
    </div> -->
    
    <div v-if="!showLoading" class="cart banner">

      <div v-if="!cartList || cartList.length == 0" class="nothing">
        <i class="icon-cart font-theme"></i>
        <h3>购物车暂无内容</h3>
        <router-link class="font-blue" to="/home">去商城首页逛逛</router-link>
      </div>
      <ul v-if="cartList.length > 0" class="cart-list border-list">
          <li class="list-box" v-for="(cart,index) in cartList">
                <label class="checkbox">
                    <!-- <input type="checkbox" name="checkbox" v-model="cart.checked"  @click="selectPro(cart)"> -->
                    <input type="checkbox" name="checkbox" :value="cart.proID" v-model="checks"  @change="selectPro(cart,index)">
                    <i class="icon-hook"></i>
                </label>
                <img class="list-img" :src="cart.proImg">
                <div class="list-info">
                    <div class="list-box">
                        <div class="list-info">
                            <h4 class="nowrap">{{cart.proName}}</h4>
                            <p>已选择：{{cart.proAttr}}</p>
                        </div>
                        <i class="delete icon-cancel" @click="showConfirmDialog(index)"></i>
                    </div>
                    <div class="list-box">
                        <p class="list-info">价格：
                            <span class="font-theme">￥{{cart.proPrice}}</span>
                        </p>
                        <div class="amount">
                            <span class="minus icon-minus" @touchstart="changeAmount(cart.proID, cart.proNum)"></span>
                            <input type="number" class="count"  v-model.number="cart.proNum" @change="calcTotalMoney">
                            <span class="plus icon-plus" @touchstart="changeAmount(cart.proID, cart.proNum)"></span>
                        </div>
                    </div>
                </div>
          </li>
      </ul>

      <div v-if="cartList.length > 0" class="actionBar-container list-box border-top">
          <label class="all-check">
              <input type="checkbox" value="false" v-model="checkAll" @change="selectAll()">
              <i class="icon-hook"></i>
              全选
          </label>
          <div class="list-info pdl">
              <span>合计：<span class="font-theme">￥{{total_price}}</span></span>
          </div>
          <router-link :class="[{ disbtn: checks.length==0 }, 'btn-theme']" to="/orderConfirm">立即购买</router-link>
      </div>
    </div>
    <footer-nav></footer-nav>

    <confirm-dialog v-if="showDialog" :confirm-text="confirmText" showBtn="true" @closeConfirmDialog="closeConfirmDialog" @confirmBtn="confirmBtn"></confirm-dialog>
     
  </div>
</template>

<script>
import loading from '../../components/loading'
import FooterNav from '../../components/Footer'
import confirmDialog from '../../components/confirmDialog'
import {cartList,editCart} from '../../service/getData'
import {mapState,mapMutations} from 'vuex'

export default {
  data () {
    return { 
      showLoading: true,
      // cartList: null,//购物车列表
      total_price: 0,//合计
      checkAll: false,//全选
      flag: true,
      showDialog: false,
      confirmTitle:'',
      confirmText:'',
      currentIndex: -1,//点击的当前元素index
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
    ])
  },
  methods: {
    ...mapMutations([
        'INIT_BUYCART', 'EDIT_CART'
    ]),
    async initData() {
      // this.showLoading = true;
      // if(this.userInfo){
      //    let res = await cartList();
      //    this.cartList = res.result.proList;
      //    this.showLoading = false;
      // } else {
      //    this.showLoading = false;
      // }
      this.INIT_BUYCART();
      this.showLoading = false;
    },
    // 修改购物车
    _editCart(proID,proNum) {
       editCart({proID, proNum}).then( res => {
          this.EDIT_CART({proID,proNum});
       });
    },
    //修改数量
    changeAmount(proID, proNum) {
      // if(value > 0){
      //   cart.proNum++; 
      // }else if(cart.proNum > 1){
      //    cart.proNum--;
      // }  
      this._editCart(proID, proNum);
      this.calcTotalMoney();
    },
    
    //勾选产品
    selectPro(cart,index) {
      // console.log(this.checks)
      if(this.checks.length == this.cartList.length) {
         this.checkAll = true;
      }else {
         this.checkAll = false;
      }
      //   if(typeof cart.checked === 'undefined'){
      //     this.$set(cart,"checked",true);
      //   }else {
      //     cart.checked = !cart.checked; 
      //   }
      //   cart.checked = !cart.checked; 
      this.calcTotalMoney();
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
      //   this.checkAll = !this.checkAll;
      this.cartList.forEach((cart,index) => {
        if(this.checkAll){
          this.checks[index] = cart.proID;
        }else {
          this.checks = [];
        }
        // if(typeof this.checks[index] == "undefined"){
        //   this.$set(cart,"checked",this.checkAll);
        // }else{
        //   cart.checked = this.checkAll;
        // }
      })
      this.calcTotalMoney();
         
    },
    //显示遮罩
    showConfirmDialog(index) {
      this.showDialog = true;
      this.currentIndex = index;
      // this.confirmTitle = "删除提示";
      this.confirmText = "确定删除该购物车吗？"
    },
    //删除购物车
    confirmBtn() {
      this.checks.forEach((check, index) => {
          if(check === this.cartList[this.currentIndex].proID){
            this.checks.splice(index,1);
          }
      });
      this.cartList.splice(this.currentIndex,1);
      this.calcTotalMoney();
      // this.changeCartAmount();
    },
    //关闭遮罩
    closeConfirmDialog() {
      this.showDialog = false;
    },
    //合计
    calcTotalMoney() {
      this.total_price = 0;
      this.cartList.forEach((cart) => {
        this.checks.forEach((check) => {
          if(check === cart.proID) {
              this.total_price += cart.proNum*cart.proPrice;
          }
        });
      });
      return this.total_price;
    },
  },
  // watch: {
  //   userInfo: function (value) {
  //       if (value && !this.cartList) {
  //           this.initData();
  //       }
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/scss/var.scss';
.banner {
  margin-bottom: 120px;
}
  
.nothing {
    @include box;
    height: 100%;
    position: absolute;
    width: 100%;
    top: -26px;
    .icon-cart {font-size: 46px;}
}

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

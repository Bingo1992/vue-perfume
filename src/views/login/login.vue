<template>
  <div class="login">
    <form action="#">
        <ul class="form-list border-list">
            <li>
                <label>登录账户</label>
                <input v-model="mobileNum" name="mobile" maxlength="11" type="tel" placeholder="请输入注册的手机号">
            </li>
           <!--  <li>
                <label>登录密码</label>
                <input type="password" placeholder="请输入登录密码">
            </li> -->
            <li>
                <label>短信验证码</label>
                <input type="tel" placeholder="填写手机验证码" name="mobileCode" maxlength="6" v-model="mobileCode">
                <button @click.prevent="getVerifyCode" class="btn-getCode" :class="{disbtn:!rightMobile}" v-show="!computedTime">获取验证码</button>
                <button @click.prevent="getVerifyCode" class="btn-getCode disbtn" v-show="computedTime">已发送({{computedTime}}s)</button>
            </li>
        </ul>
      <!--   <div class="clearfix pdr">
            <a class="font-gray fr">忘记密码？</a>
        </div> -->
        <div class="btn">
            <a class="btn-theme" @click="mobileLogin">登录</a>
        </div>
        
    </form>

    <alert-tip v-if="showAlertTip" :alertText="alertText"></alert-tip>
   
  </div> 
</template>

<script>
import alertTip from 'components/alertTip'
import {mapMutations,mapState} from 'vuex'
import {mobileCode, checkExsis, sendLogin} from 'service/getData'
export default {
  name: 'login',
  data () {
    return {
        mobileNum: null,//手机号
        computedTime: 0, //倒数记时
        validate_token: null, //获取短信时返回的验证值，登陆时需要
        mobileCode: null, //验证码
        alertText: "",
        showAlertTip: false,
        arr:[]
    }
  },
  components: { 
    alertTip
  },
  computed: {
    //判断手机号码
    rightMobile() {
        return  /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/.test(this.mobileNum)
     },
     //判断验证码
    rightCode() {
        return /^\d{6}$/gi.test(this.mobileCode)
    }
  },
  methods: {
    ...mapMutations([
        'RECORD_USERINFO'
    ]),
    ...mapState([
        'userInfo'
    ]),
    //获取短信验证码
    async getVerifyCode(){
        if(this.rightMobile) {//倒计时
            this.computedTime = 30;
            this.timer = setInterval(() => {
                this.computedTime --;
                if (this.computedTime == 0) {
                    clearInterval(this.timer)
                }
            }, 1000);
             //判读用户是否存在
            let exsis = await checkExsis(this.mobileNum,'mobile');
            if (exsis.message) {
                this.showHideAlert(exsis.message);
                return
            }else if(!exsis.is_exists) {
                this.showHideAlert("您输入的手机号尚未绑定");
                return
            }
            //发送短信验证码
            let res = await mobileCode(this.mobileNum,'mobile');
            if (res.message) {
                alert('hehe')
                return
            }
            this.validate_token = res.validate_token;
        }
    },
    //发送登陆信息
    async mobileLogin(){
        if (!this.rightMobile) {
           this.showHideAlert('手机号码不正确');
            return
        }else if(!this.rightCode){
            this.showHideAlert('短信验证码不正确');
            return
        }
        //手机号登录
        this.arr = await sendLogin(this.mobileCode,this.mobileNum,this.validate_token);   
        this.userInfo = this.arr; 
                                 
        // this.CART_AMOUNT(this.userInfo.cartAmount)
       
        //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
        if (!this.userInfo.user_id) {
            alert(this.userInfo.message);
        }else{
            this.RECORD_USERINFO(this.userInfo);
            // console.log(this.userInfo.user_id)
            this.$router.go(-1);
            
        }
    },
    //显示隐藏提示框
    showHideAlert(text) { 
        this.showAlertTip = true;
        this.alertText = text;
        setTimeout(() => {
            this.showAlertTip = false;
        }, 1000);
    }

  }
  
}
</script>

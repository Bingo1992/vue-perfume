<template>
  <div class="addAddress">
      <ul class="form-list border-list">
          <li>
              <label>收货人</label>
              <input type="text" placeholder="请输入收货人姓名" v-model="ads.name">
          </li>
          <li>
              <label>联系电话</label>
              <input type="tel" placeholder="请输入联系电话" v-model="ads.mobile">
          </li>
          <li class="btn-city" @click="showCityDialog">
              <label>所在城市</label>
              <input class="cityValue nowrap" type="text" placeholder="选择城市" readonly v-model="ads.cityVal">
              <i class="icon-right"></i>  
          </li>
          <li class="btn-zone" @click="showDisDialog">
              <label>所在地区</label> 
              <input class="zoneValue" type="text" placeholder="选择区县" readonly v-model="ads.disVal">
              <i class="icon-right"></i>  
          </li>
          <li>
              <textarea class="list-info" cols="30" rows="3" placeholder="详细地址" v-model="ads.detailVal"></textarea>
          </li>
      </ul>
      <label class="list-box" style="margin:0">
          <div class="checkbox">
              <input type="checkbox">
              <i class="icon-hook"></i>
          </div>
          <span class="list-info">设为默认地址</span>
      </label>
      <div class="btn">
        <p class="btn-theme" @click="saveAddress">保存</p>
    </div>

    <select-dialog  :open-city="openCity" :open-dis="openDis" :zone="district" @closeDialog="closeDialog" @cityName="cityName"  @disName="disName"></select-dialog>

    <alert-tip v-show="showAlertTip" :alertText="alertText"></alert-tip>
  </div> 
</template>

<script>
    import selectDialog from 'components/selectDialog'
    import alertTip from 'components/alertTip'
    import {mapState, mapMutations} from 'vuex'
    import loading from 'components/loading'
    export default {
      name: 'addAddress',
      data () {
        return {
            showLoading: true, //显示加载中  
            openCity:false,
            openDis: false,
            district:[],
            alertText: "",
            showAlertTip: false,
            ads:{
              name:'',
              mobile:'',
              cityVal:'',
              disVal:'',
              detailVal:''
            }
              
        }
      },
      components: {
        loading,selectDialog,alertTip
      }, 
      computed: {
        //判断手机号码
        rightMobile() {
            return  /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/.test(this.ads.mobile)
         }
      },
      methods: {
        // 保存
        saveAddress() {
          if(!this.ads.name){
            this.showHideAlert('收货人不能为空');
          } else if(!this.rightMobile){
            this.showHideAlert('手机号不正确');
          } else if(!this.ads.cityVal){
            this.showHideAlert('城市不能为空');
          } else if(!this.ads.disVal){
            this.showHideAlert('县区不能为空');
          } else if(!this.ads.cityVal){
            this.showHideAlert('城市不能为空');
          } else if(!this.ads.detailVal){
            this.showHideAlert('详细地址不能为空');
          } else {
            this.$router.go(-1);
          }
        },
        showCityDialog() {
          this.openCity = true;
        },
        showDisDialog() {
          this.openDis = true;
        },
        closeDialog() {
          this.openCity = false;
          this.openDis = false;
        },
        cityName(name){
          this.ads.cityVal = name;
        },
        disName(name){
          this.ads.disVal = name;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>

<template>
  <div class="addAddress">
      <ul class="form-list border-list">
          <li>
              <label>收货人</label>
              <input class="name" type="text" placeholder="请输入收货人姓名">
          </li>
          <li>
              <label>联系电话</label>
              <input class="mobile"  type="tel" placeholder="请输入联系电话">
          </li>
          <li class="btn-city" @click="showCityDialog">
              <label>所在城市</label>
              <input class="cityValue nowrap" type="text" placeholder="选择城市" readonly>
              <i class="icon-right"></i>  
          </li>
          <li class="btn-zone" @click="showDisDialog">
              <label>所在地区</label> 
              <input class="zoneValue" type="text" placeholder="选择区县" readonly>
              <i class="icon-right"></i>  
          </li>
          <li>
              <textarea class="list-info" cols="30" rows="3" placeholder="详细地址"></textarea>
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
        <router-link class="btn-theme" to="/">保存</router-link>
    </div>

    <select-dialog  :open-city="openCity" :open-dis="openDis"></select-dialog>
  </div> 
</template>

<script>
    import selectDialog from 'components/selectDialog'
    import {mapState, mapMutations} from 'vuex'
    import loading from 'components/loading'
    import {addressList} from 'service/getData'
    export default {
      name: 'addAddress',
      data () {
        return {
            showLoading: true, //显示加载中  
            chooseAddress: null,
            address:[],
            openCity:false,
            openDis: false
        }
      },
      components: {
        loading,selectDialog
      }, 
      mounted() {
       this._getAddress();
      },
  
      methods: {
        // 获取地址
        async _getAddress() {
            this.address = await addressList();
            this.showLoading = false;
        },
        showCityDialog() {
          this.openCity = true;
        },
        showDisDialog() {
          this.openDis = true;
        }
       
      }
  
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>

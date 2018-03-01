<template>
  <div class="result1">
      <div class="nothing">
        <!-- 成功 -->
         <i class="icon-hook bg-success"></i>
         <!-- 出错 -->
         <!-- <i class="icon-cancel bg-warn"></i> -->
         <!-- 提示 -->
        <!--  <i class="icon-gantan bg-info"></i> -->
         <h3>购买成功</h3>
         <p class="font-gray">商品将在2天内发货，敬请留意。
         </p>
    </div>
    <div class="two-btn result-btn">
        <router-link class="btn-theme" to="/home">回到首页</router-link>
        <router-link class="btn-default" to="/order">查看订单</router-link>
    </div>
  </div> 
</template>

<script>
    export default {
      name: 'result1',
      data () {
        return {
          
        }
      }
  
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.result-btn {
  padding: 0 20px;
  a{
    margin: 0 10px;
  }
}
</style>

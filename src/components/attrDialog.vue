<template>
	<div class="pro-sort-dialog">
		<div class="ps-dialog"></div>
		<div class="pro-buy-content">
            <i class="btn-reset icon-cancel"></i>
            <div class="rich-box border-bottom">
                <h4>定制气垫BB霜</h4>
                <p class="font-theme">￥<span>200.00</span></p>
            </div>
            <div class="sort-list-cnt">
                <div class="sort-list border-bottom">
                    <h4>颜色分类</h4>
                    <ul>
                        <li class="active">浅粉色</li>
                        <li>浅米色</li>
                        <li>自然粉色</li>
                        <li>自然米色</li>
                        <li>深米色</li>
                    </ul>
                </div>
               	<div class="sort-list border-bottom">
                    <h4>颜色分类</h4>
                    <ul>
                        <li class="active">浅粉色</li>
                        <li>浅米色</li>
                        <li>自然粉色</li>
                        <li>自然米色</li>
                        <li>深米色</li>
                    </ul>
                </div>
                <div class="sort-list border-bottom">
                    <h4>颜色分类</h4>
                    <ul>
                        <li class="active">浅粉色</li>
                        <li>浅米色</li>
                        <li>自然粉色</li>
                        <li>自然米色</li>
                        <li>深米色</li>
                    </ul>
                </div>
                 <div class="list-box">
                    <div class="list-info">
                        <h4>购买数量</h4>
                    </div>
                    <div class="amount">
                        <span class="minus icon-minus"></span>
                        <input type="text" class="count" value="1">
                        <span class="plus icon-plus"></span>
                    </div>
                </div>
            </div>
            <div class="border-top btn">
            	<a class="btn-theme">确定</a>
            </div>
            
        </div>
	</div>
</template>

<script>
export default {
   data() {
　　  return {
　　  }
　 },
	props: ['getAttr'],

}
</script>

<style lang="scss">
@import "../assets/scss/var.scss";

.ps-dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,0,.6);
    z-index: 8;
}
.pro-buy-content {
    background-color: #fff;
    width: 100%;
    // overflow-y: auto;
    // overflow-x: hidden;
    // max-height: 20rem;
    z-index: 18;
    position: fixed;
    bottom: 0;
    header {
        @include height(40px);
        text-align: center;
        margin-bottom: .5rem;
    }
    .icon-cancel {
        position: absolute;
        right: 10px;
        top: 10px;
        @include circle(24px);
        color: #5f646e;
        border: 2px solid #5f646e;
        font-size: 16px;
        font-weight: bold;
        z-index: 10;
        box-sizing: initial;
    }
}
.sort-list-cnt {
    padding-top: .5rem;
    max-height: 8rem;
    overflow-y: auto;
}
.sort-list {
    padding: 10px 0 0 10px;
    display: -webkit-box;
    overflow-y: auto;
    font-size: $md-font;
    p {
        width: 3rem;
        line-height: 28px;
    }
    ul {
        padding: 0 $gauge;
        -webkit-box-flex:1;
    }
    li {
        float: left;
        padding: 0 $gauge;
        margin: 0 10px 10px 0;
        @include height(28px);
        border: 1px solid $border-color;
        border-radius: 4px;
    }
    li.active {
        color: $color-theme;
        border-color: $color-theme;
        a{
           color: $color-theme; 
        }
    }
}	
</style>
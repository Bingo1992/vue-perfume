<template>
    <div>
        <loading v-if="showLoading"></loading>
        <div v-if="!showLoading" class="banner-2">
            <!-- 头部 -->
            <div class="bg-show" :key="proDetail.id">
                <img :src="proDetail.image_url" alt="">
                <div class="rich-box">
                     <p>{{proDetail.title}}</p>
                    <div class="list-box">
                        <div class="list-info">
                            <span class="font-theme">￥{{proDetail.price[0]}}</span>
                        </div>
                        <span class="font-blue">
                            销量{{proDetail.sale}}
                        </span>
                    </div>
                </div>    
            </div>

            <div class="list-box bg-show">
                <div class="list-info" @click="showDialog">{{attrName? attrName:'选择属性'}}</div>
                <i class="icon-right"></i>
            </div>

            <!-- 产品介绍 -->
            <div class="bg-show title-bar">
               <h4>产品介绍</h4>
               <div class="rich-box" >
                   <img v-for="imgSrc in imglistSrc" :src="imgSrc">
               </div>
            </div>
        </div>
        <!-- -banner- -->
        <div class="fixed-bottom">
            <div class="two-btn border-top">
                <router-link class="backNav border-right" to="/cart">
                    <i class="icon-cart"></i>
                    <p>购物车</p>
                </router-link>
                <a class="btn-cart" @click="addCart">加入购物车</a>
                <a class="btn-buy"  @click="gobuy">立即购买</a>
            </div>
        </div>

        <!-- 选择属性遮罩 -->
        <!-- <attr-dialog v-if="showAttrDialog"></attr-dialog> -->
        <div class="pro-sort-dialog">
            <div class="ps-dialog" :class="{'show':showAttrDialog}"></div>
            <div class="pro-buy-content" :class="{'more-top-open':showAttrDialog}">
                <i class="btn-reset icon-cancel" @click="closeDialog"></i>
                <div class="rich-box border-bottom">
                    <h4>{{proDetail.title}}</h4>
                    <p class="font-theme">￥{{price}}</p>
                </div>
                <div class="sort-list-cnt">
                    <div class="sort-list border-bottom" v-for="(attr,index1) in proDetail.attr">
                        <h4>{{attr.attrTitle}}</h4>
                        <ul>
                            <li v-for="(attrSelect,index2) in attr.attrSelect" :class="{active: attrSelect.active}" @click="selectAttr(index1,index2)">{{attrSelect.name}}</li>
                        </ul>
                    </div>
                     <div class="list-box">
                        <div class="list-info">
                            <h4>购买数量</h4>
                        </div>
                        <div class="amount">
                            <span class="minus icon-minus" @touchstart="minusAmount"></span>
                            <input type="number" class="count" value="1" v-model.number="amount">
                            <span class="plus icon-plus" @touchstart="addAmount"></span>
                        </div>
                    </div>
                </div>
                <div class="border-top btn">
                    <a class="btn-theme" @click="confirmBtn">确定</a>
                </div>
                
            </div>
        </div>
        <!-- 提示遮罩 -->
        <alert-tip v-if="showAlertTip" :alert-text="alertText"></alert-tip>
            
    </div>
    	 

</template>

<script>
import loading from '../../components/loading'
// import attrDialog from './attrDialog'
import alertTip from '../../components/alertTip'
import {mapState} from 'vuex'
import {proDetail} from '../../service/getData'

export default {
	data(){
		return {
			proDetail: [],
			imglistSrc:[],
            showLoading: true,
            showAttrDialog: false,
            showAlertTip: false,
            alertText: "",
            attrLen: 0,//属性个数
            attrName:'',//获取的属性名称
            attrArray:[],//获取的属性名称数组
            amount: 1,//添加的数量
            price: 0,//属性选中的价格
            btnType: 0//判断按钮类型,0为选则属性，1为加入购物车，2为购买
		}
	},
    components: {
        loading,alertTip
    },
	mounted() {
		this.initData(this.$route.params.id);
    },
    computed: {
        ...mapState([
            'userInfo'
        ])
    },
	methods: {
		async initData(id) {
			// this.proDetail = await proDetail(this.$route.params.id);
            this.proDetail = await proDetail(id);
            this.attrLen = this.proDetail.attr.length;
            this.price = this.proDetail.price[0];//初始化价格
            this.attrName = '';
			this.imglistSrc = this.proDetail.detailImg;
            this.showLoading = false;
			
		},
        //点击加入购物车按钮
        addCart() {
            this.btnType = 1;
            if(!this.userInfo){
                this.showHideAlert('请先登录');
            }else {
                this.showAttrDialog = true; 
            }
            // if(this.attrLen === this.getActiveNum()) {
                // this.showHideAlert('已成功加入购物车');
            // }else {
                // this.showAttrDialog = true;
            // }
        },
        //购买按钮
        gobuy() {
            this.btnType = 2;
            if(!this.userInfo){
                this.showHideAlert('请先登录');
            }else if(this.attrLen === this.getActiveNum()) {
                this.$router.push('/confirmOrder');
            }else {
                this.showAttrDialog = true;
            }
        },
        //属性选择
        selectAttr(index1,index2) {
            this.proDetail.attr.forEach((attr, i) => {
                if(i == index1){
                    attr.attrSelect.forEach((attrSelect, j) => {
                        if(j === index2){
                            if(attr.id === "size") {
                                this.price = this.proDetail.price[j];
                            }
                            attrSelect.active = true;
                            this.attrArray[i] = attrSelect.name;//获取选中的属性名称
                        }else {
                            attrSelect.active = false;
                        }
                    });
                }
            });
        },
        //确定按钮
        confirmBtn() {
            if(this.attrLen === this.getActiveNum() && this.amount != '') {
                this.closeDialog();
                this.attrName = '已选择：' + this.attrArray.join("，");
                switch (this.btnType) {
                    // case 0: 
                        // this.closeDialog();
                        // break;
                    case 1:
                         this.showHideAlert('已成功加入购物车');
                         break;
                    case 2:
                         this.$router.push('/confirmOrder');
                         break;
                }
                   
            }else if(this.attrLen > this.getActiveNum()){
                this.showHideAlert('还有未选项');
            }else {
                this.showHideAlert('数量不能为空');
            }     
        },

        //获取高亮属性个数
        getActiveNum() {
            let count = 0;
            this.proDetail.attr.forEach(function(ele) {
                ele.attrSelect.forEach(function(item){
                    if(item.active == true){
                        count++;
                    }
                });
            });
            return count;
        },
        //添加数量
        addAmount() {
            this.amount++;
        },
        //减少数量
        minusAmount() {
            if(this.amount >1){
                this.amount--;
            }
        },
        showDialog(){
            this.showAttrDialog = true;
            this.btnType = 0;
        },
        closeDialog(){
            this.showAttrDialog = false;
        },
        //显示隐藏提示框
        showHideAlert(text) { 
            this.showAlertTip = true;
            this.alertText = text;
            setTimeout(() => {
                this.showAlertTip = false;
            }, 1000);
        }
	},
    watch:{
        // '$route':'initData'
        $route(to){
            let reg = /productDetail\/\d+/;
            if(reg.test(to.path)){
                let categotyId = this.$route.params.id || 0;
                this.initData(categotyId);
            }
        }   
    }

}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/var.scss";

.right-btn {
    float: right;
    p {
        display: inline-block;
        width: 3rem;
        @include height(40px);
    }
    .btn-reset {
        position: relative;
        text-align: center;
        color: $color-theme;
        &:after{
             @extend %mini-border;
    		border-left: 1px solid $border-color;
        }
        
    }
}
.single-detail {
    float: left;
    width: 14.2rem;
    .right {
        padding: 0;
        color: #898989;
        position: absolute;
        right: .5rem;
        bottom: .5rem;
    }
}
.banner-2 {
    padding-bottom: 60px;
}
.backNav {
    background-color: #fff;
    -webkit-box-orient: vertical;
    i{
        color: $color-theme;
        padding-top: 4px;
    }
    p {
        color: $color-gray;
        font-size: 12px;
    }
}
.btn-cart {
    color: $color-theme;
    background-color: #fff;
    // width: 100%;
    // line-height: 40px;
}
.btn-buy {
    background-color: $color-theme;
    color: #fff;
    // width: 100%;
    // line-height: 40px;
}

/*选择属性遮罩*/
.ps-dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,0,.6);
    z-index: 8;
    display: none;
    // &.show {display: block;}
}
.pro-buy-content {
    background-color: #fff;
    width: 100%;
    z-index: 18;
    position: fixed;
    bottom: 0;
    -webkit-transform: translateY(150%) translateZ(0);    
    -webkit-transition: all .4s;
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
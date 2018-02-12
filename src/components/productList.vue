<template>
	<div>
		<loading v-if="showLoading"></loading>
		<div v-if="!showLoading" class="shoplist_container pdt">
			<div class="bg-show">
				<div class="title-bar">
					<h4>热门推荐</h4>
					<!-- <a class="getmore">更多</a> -->
				</div>
				<ul class="border-list" v-if="proListArr.length">
					<router-link :to="{path: '/productDetail',query:{id: item.proID}}" v-for="item in proListArr" tag='li' :key="item.proID" class="list-box">
						<img :src="item.image_url" alt="" class="list-img">
						<div class="list-info">
							<h4>{{item.title}}</h4>
							<p>{{item.content}}</p>
						</div>
					</router-link>
				</ul>
			</div> 
		</div>
	</div>
		
</template>

<script>
import loading from 'components/loading'
import {proList} from 'service/getData'
import axios from 'axios'
export default {
	data(){
		return {
			offset: 0, // 批次加载店铺列表，每次加载20个 limit = 20
			proListArr:[], // 店铺列表数据
			showLoading: true
		}
	},
	components: {
	    loading
  	},
	mounted(){
		this.initData();
	},
	methods: {
		async initData() {
			this.proListArr  = await  proList();
			// setTimeout(() => {
				this.showLoading = false;
			// },500);
			
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
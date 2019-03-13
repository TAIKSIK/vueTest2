<template>
    <div class="car">
        <div id="user-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
				<a href="javascript:window.history.go(-1);"></a>
			</div>
			<span class="user-title">我的订单</span>
			<div class="shopping-cart fr">
				<a href="javascript:;"></a>
			</div>
	    </nav>
	    <div class="myorder-tab">
	    	<div class="myorder-nav">
		    	<ul id="tab_btn" class="coupon-list">
		    		<li class="pick" @click="changeM($event,1)">全部订单</li>
		    		<li @click="changeM($event,2)"><span class="bar"></span>待付款</li>
		    		<li @click="changeM($event,3)"><span class="bar"></span>待收货</li>
		    	</ul>
		    	<div class="cl"></div>
		    </div>
		    <div class="myorder-content">
		    	<ul>
					<div v-show="meue==check1" class="c1"><c1></c1></div>
					<div v-show="meue==check2" class="c2"><c2></c2></div>
					<div v-show="meue==check3" class="c3"><c3></c3></div>
		    	</ul>
		    </div>
	    </div>
	    <!--footer begin-->
		<footbar></footbar>
	    <!--footer end-->
	</div>
    </div>
</template>

<script>
import footbar from "./footbar"
import c1 from "./c1.vue"
import c2 from "./c2.vue"
import c3 from "./c3.vue"


export default {
	data(){
		return{
		meue:1,
		check1:1,
		check2:2,
		check3:3,
		}
		
	},
    components:{
        footbar,c1,c2,c3
	},
	methods:{
		changeM(e,index){
			this.meue=index
			let items = e.target.parentNode.children
			
			for(var i=0;i<items.length;i++){
				items[i].className=""
			}
		
			e.target.parentNode.children[index-1].className="pick"
			
		}
	}
}


</script>

<style>

</style>



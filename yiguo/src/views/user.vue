<template>
    <div class="user">
        <div id="user-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
				<a href="javascript:window.history.go(-1);"></a>
			</div>
			<span class="user-title">个人中心</span>
			<div class="shopping-cart fr">
				<a href="javascript:;" @click="u2car"></a>
			</div>
	    </nav>
		<section class="m-component-user" id="m-user">
	        <div class="m-user-avatar text-center">
	            <span class="avatarPic"><img style="display: inline;" class="lazy img-circle" src="../assets/images/user-img0.jpg"></span>
	            <div class="user_btn">
	            	<a href="javascript:;" @click="u2login" class="this">登录</a>
	            	<a href="javascript:;" @click="u2reg">注册</a>
	            </div>
	        </div>
	        
	        <div class="head_list">
	        	<ul class="m-user-list">
	        		<li><span>￥0.00</span><br>账户余额</li>
	        		<li><a href="javascript;:"><span class="bar"></span><span>4</span><br>优惠卷</a></li>
	        		<li><a href="javascript;:" @click="u2car"><span class="bar"></span><span>2</span><br>我的订单</a></li>
	        	</ul>
	        </div>
	        <ul class="m-user-content">
	            <li>
	                <div class="m-user-item">
	                   <a href="javascript:;" class="user-order">邀请好友得大礼包</a>
	                </div>
	                <div class="m-user-item">
	                   <a href="javascript:;" @click="u2ground" class="user-coupon">我的团单</a>
	                </div>
	            </li>
	            <li>
	            	<div class="m-user-item">
	                   <a href="javascript:;" class="user-site">管理收货地址</a>
	                </div>
	                <div class="m-user-item">
	                   <a href="javascript:;" class="user-set">设置</a>
	                </div>
	                <div class="m-user-item">
	                   <div class="user-score"><span class="pull-right">400-110110</span>联系客服</div>
	                </div>
	            </li>
	            <li class="m-user-footer">
	            粤ICP备8888888 广东·广州
	            </li>
	        </ul>
	    </section>
	    <!--footer begin-->
		<footbar></footbar>
	    <!--footer end-->
	</div>
    </div>
</template>

<script>
import footbar from "./footbar"
export default {
    components:{
        footbar
	},
	methods:{
		u2car(){
			this.$router.push('/car')
		},
		u2login(){
			this.$router.push('/login')
		},
		u2reg(){
			this.$router.push('/reg')
		},
		u2ground(){
			this.$router.push('/ground')
		}
	}
}
</script>


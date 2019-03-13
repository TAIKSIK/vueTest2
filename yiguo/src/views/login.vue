<template>
    <div class="login">
        <div id="register-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
				<a href="javascript:window.history.go(-1);"></a>
			</div>
			<span class="user-title">登录</span>
			<div class="registerBtn">
				<a href="javascript:;" @click="l2reg">注册</a>
			</div>
	    </nav>
		<div class="register-box">
			<form action="" class="am-form" id="doc-vld-msg">
				<fieldset>
				    <div class="am-form-group">
				      	<label for="doc-ipt-3" class="am-u-sm-2 j-form-label">
					    	<span class="registericon registericon-user"></span>
					  	</label>
				      	<input type="text" id="doc-vld-name-2-1" placeholder="用户名/邮箱" data-validation-message="请输入用户名或登录邮箱" required/>
				    </div>

				    <div class="am-form-group">
				      	<label for="doc-vld-pwd-1" class="am-u-sm-2 j-form-label">
			    	  		<span class="registericon registericon-password"></span>
			    	  	</label>
				      	<input type="password" id="doc-vld-pwd-1" data-validation-message="请输入密码" placeholder="请输入密码" required/>
				    </div>
				    <button class="btn am-btn am-btn-secondary" type="submit">登 录</button>
				</fieldset>
			</form>
			<div class="text-right">
	            <a href="javascript:;" class="m-login-link">忘记密码？</a>
	        </div>	
		</div>
	</div>
    </div>
</template>

<script>
	export default{
		methods:{
			l2reg(){
				this.$router.push('/reg')
			}
		}
	}
</script>

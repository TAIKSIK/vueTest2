<template>
    <div class="reg">
        <div id="register-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
				<a href="javascript:window.history.go(-1);"></a>
			</div>
			<span class="user-title">注册会员</span>
	    </nav>

		<div class="register-box">
			<form action="" class="am-form" id="doc-vld-msg">
				<fieldset>
				    <div class="am-form-group">
				      	<label for="doc-ipt-3" class="am-u-sm-2 j-form-label">
					    	<span class="registericon registericon-user"></span>
					  	</label>
				      	<input type="number" id="doc-vld-name-2-1" style="float: left;width: 56%;" data-validation-message="请输入手机号码" placeholder="手机号码" required/>
				      	<span class="input-group-btn">
		                    <button class="btn btn-default" type="button" id="TestGetCode"><span>点击获取</span><span class="hide">还剩<b id="timeout">60</b>秒</span></button>
		                </span>
				    </div>
				    <div class="am-form-group">
				      	<label for="doc-vld-pwd-1" class="am-u-sm-2 j-form-label">
			    	  		<span class="registericon registericon-password"></span>
			    	  	</label>
				      	<input type="password" id="doc-vld-pwd-1" data-validation-message="请输入手机收到的短信验证码" placeholder="验证码" required/>
				    </div>
				    <button class="btn am-btn am-btn-secondary" type="submit">注 册</button>
				</fieldset>
			</form>
		</div>	
	</div>
    </div>
</template>

<script>

</script>


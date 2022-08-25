<template>
	<view class="PwdL">
		<status-bar pwd="验证登录" :jump="jumpUrl"> </status-bar>
		<view class="leftB"></view>
		<view class="leftR"></view>

		<!-- 密码登录-->
		<view class="phoneTest">密码登录</view>
		<!-- 登录部分 -->
		<view class="loginView">
			<view class="inputPhone">
				<view class="leftLo">
					<uni-icons color="#dedede" custom-prefix="iconfont" type="icon-phone1" size="25"></uni-icons>
				</view>
				<view class="inputs">
					<input type="text" placeholder="请输入电话号码">
				</view>
			</view>

			<view class="inputYzm">
				<view class="leftLo">
					<uni-icons color="#dedede" custom-prefix="iconfont" type="icon-dunpaibaoxianrenzheng_o" size="25">
					</uni-icons>
				</view>
				<view class="yzmCons">
					<input type="text" placeholder="请输入密码">
				</view>

			</view>
			<text class="tsNes">忘记密码?</text>

			<!-- 登录按钮 -->
			<view class="loginBtn" @click="handleLogin">登录</view>
		</view>


	</view>
</template>

<script>
	import Pwdl from './PwdL.js'
	export default Pwdl;
</script>

<style>
	@import url("./PwdL.css");
</style>

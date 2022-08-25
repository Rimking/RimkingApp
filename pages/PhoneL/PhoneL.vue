<template>
	<view class="PhoneL">
		<status-bar pwd="密码登录" :jump="jumpUrl"></status-bar>
		<!-- 登录部分 -->

		<view class="leftB"></view>
		<view class="leftR"></view>



		<!-- 手机验证登录 -->
		<view class="phoneTest">手机验证登录</view>
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
					<input type="text" placeholder="请输入验证码">
				</view>
				<view class="sendYzn"><text>点击发送</text>
				</view>
			</view>
			<text class="tsNes">未注册账号验证通过将自动注册</text>

			<!-- 登录按钮 -->
			<view class="loginBtn" @click="handleLogin">登录</view>
		</view>

		<!-- 其他登录部分 -->

		<view class="checkOher">
			<view class="othtitle">
				<view class="lcon"></view>
				<view class="cTil">其他部分</view>
				<view class="rcon"></view>
			</view>

			<!-- btn -->
			<view class="othBtns">
				<view class="selwechat">
					<uni-icons custom-prefix="iconfont" type="icon-wechat" size="25" color="white"></uni-icons>
				</view>
				<view class="selqq">

					<uni-icons custom-prefix="iconfont" type="icon-QQ" size="25" color="white"></uni-icons>
				</view>
			</view>


		</view>

	</view>
</template>

<script>
	import PhoneL from "./PhoneL.js";
	export default PhoneL;
</script>

<style>
	@import url("./PhoneL.css");
</style>

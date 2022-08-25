<template>
	<view class="container">


		<!--电话号码  -->
		<view class="telPhone">
			<view class="phnum">176****4794</view>
			<button class="agrBtn" type="primary">
				同意协议并一键登录
			</button>
		</view>

		<!-- 其他部分 -->
		<view class="otherModel">

			<!-- 标题 -->
			<view class="otherTil">其他登录方式</view>
			<!-- otherBtn -->
			<view class="loginType">
				<view class="lgImag" @click="handlePhoneLogin">
					<image src="../../static/imgs/phone_1.png" mode=""></image>
				</view>
				<view class="lgImag" @click="handleWechatLogin">
					<image src="../../static/imgs/wechat_1.png" mode=""></image>
				</view>
				<view class="lgImag" @click="handleQQLogin">
					<image src="../../static/imgs/qq_1.png" mode=""></image>
				</view>
			</view>
			<!-- 阅读隐私条款 -->

			<view class="readNews">
				<view class="leftRadoi">
					<view style="margin-top:10rpx;width: 25rpx;height: 25rpx;border: 2rpx solid white"></view>
				</view>
				<view class="rightCons">
					登录即同意<text style="color: #FF99CC;">《中国移动认证服务条款》</text>
					<text style="color: #FF99CC;">《用户协议》</text>以及<text style="color: #FF99CC;">《隐私协议》</text>并使用本机号码登录
				</view>


			</view>

		</view>




	</view>
</template>

<script>
	import index from "./index.js"
	export default index;
</script>

<style>
	@import url("./index.css");
</style>

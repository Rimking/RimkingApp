<template>
	<view class="statusBar">
		<!-- 左边右边都有一个小方块 ，中间是标题，默认盛满-->
		<view class="leftBtn">
			<uni-icons type="back" size="24" @click="handleBack"></uni-icons>
		</view>
		<view class="conents">{{title ? title : ""}}</view>
		<view class="rightBtn">
			<view v-if="pwd" style="font-size: 24rpx;" @click="handleJump">{{pwd}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "status-bar",
		props: ["title", "pwd", "jump"], //第一个是标题，第二个是是否需要显示内容，第三个是跳转的path
		data() {
			return {

			}
		},
		methods: {
			handleBack() {
				uni.navigateBack({
					delta: 1
				});
			},
			handleJump() {
				// 如果是挑战到账号密码登录就是直接跳转，如果是跳转验证登录就直接后退一步
				if (this.jump.indexOf("PhoneL") != -1) {
					uni.navigateBack({
						delta: 1
					});
				} else {
					uni.navigateTo({
						url: this.jump
					});
				}



			},
		},

	}
</script>
<style>
	.statusBar {
		width: 100%;
		height: 80rpx;
		background-color: transparent;
		padding-top: 60rpx;
		display: flex;
	}

	.conents {
		flex: 1;
		text-align: center;
		line-height: 80rpx;
	}

	.leftBtn,
	.rightBtn {
		text-align: center;
		line-height: 80rpx;
		width: 100rpx;
		height: 80rpx;
	}

	.rightBtn {
		width: 120rpx;
	}
</style>

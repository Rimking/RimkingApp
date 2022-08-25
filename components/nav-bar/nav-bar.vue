<template>
	<view class="navBarCom">
		<view class="items" @click="handleBar(item.id)" v-for="item in list" :key="item.id"
			:class="currentTab == item.id  ? 'items select_Tab' : 'items' ">
			{{item.name}}

			<text v-if="currentTab == item.id"></text>
		</view>


	</view>
</template>

<script>
	export default {
		name: "nav-bar",
		props: {
			rightAction: {
				type: Function,
				default () {
					return function() {}
				}
			}
		},
		data() {
			return {
				list: [{
						name: "首页",
						id: 1,
					},
					{
						name: "交友",
						id: 2,
					},
					{
						name: "电台",
						id: 3,
					},
					{
						name: "游戏",
						id: 4,
					}

				],
				currentTab: 1,
			};
		},
		methods: {
			handleBar(e) {
				this.currentTab = e;
				//方法-：调用父组件的方法，传值回父组件
				this.rightAction(e)

				// // 方法二：发通知
				// uni.$emit('unpate_value', this.setValue)

			},
		},
	}
</script>

<style>
	.navBarCom {
		width: 100%;
		height: 80rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
	}

	.items {
		position: relative;
		float: left;
		width: 100rpx;
		height: 80rpx;
		text-align: center;
		color: #979797;
		font-size: 30rpx;
		line-height: 70rpx;
		transition: all 0.3s;
	}

	.items text {
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-left: -20rpx;
		padding: 4rpx 20rpx;
		border-radius: 15rpx;
		background-color: #AC95F7;
	}

	.select_Tab {
		color: black;
		font-size: 34rpx;
		font-weight: 700;
	}
</style>

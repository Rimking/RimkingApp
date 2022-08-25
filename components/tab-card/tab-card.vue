<template>
	<view class="tabcard">
		<view class="cardTisl"><b>{{ModelTils}}</b></view>
		<view class="norItems" v-for="item in ModelList" @click="handleCard(item.id)" :key="item.idx">
			<view class="tabULofs">
				<u--image :src="item.imUrl" width="50rpx" height="50rpx">
				</u--image>
			</view>
			<view class="tabUtiels">
				{{item.tils}}
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			ModelList: Array,
			ModelTils: String
		},
		data() {
			return {}
		},
		methods: {
			handleCard(id) {
				console.log(id)
				uni.showToast({
					title: `${id}`,
					duration: 1000
				});
			}
		}
	}
</script>

<style>
	@import url("tabcard.css");
</style>

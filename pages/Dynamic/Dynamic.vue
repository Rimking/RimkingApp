<template>
	<view class="DynamicModel">
		<view class="nav_cons">
			<view class="leftModel">
				<text :class="tSelect == 1 ? 'lefTils selectTar': 'lefTils'" @click=" tSelect = 1">动态广场</text>
				<text :class="tSelect == 2 ? 'lefTils selectTar': 'lefTils'" @click=" tSelect = 2">动态</text>
			</view>
			<view class="rightBtn">
				<u-search :showAction="false" height="55" searchIconSize="40" placeholder="inoous" v-model="keyword">
				</u-search>
			</view>
		</view>
		<!-- 轮播图部分 -->
		<view class="swiperModel">
			<u-swiper :list="swiperList1" height="300"></u-swiper>
		</view>
		<!-- 动态部分 -->
		<view class="actieModel">
			<active-model></active-model>
		</view>
		<!-- 圈子部分 -->
		<view class="circleModel"></view>


	</view>
</template>

<script>
	import Dynamic from "./Dynamic.js"
	export default Dynamic;
</script>

<style>
	@import url("./Dynamic.css");
</style>

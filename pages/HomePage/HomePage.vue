<template>

	<view class="HomePage">

		<!-- 顶部搜索框 -->
		<view class="searchView">
			<view class="searchMo">
				<view class="searchIcon">
					<uni-icons type="search" size="24"></uni-icons>
				</view>
				<view class="searchInpus">
					<input type="text" placeholder="Search">
				</view>
			</view>

			<view class="Ranking">
				<image src="../../static/imgs/jb.png"></image>
			</view>
		</view>

		<!-- navbar -->
		<view class="NavBarView">
			<nav-bar :rightAction='rightAction'></nav-bar>
		</view>
		<!-- 选择模块 -->
		<!-- 首页 -->
		<view class="checkModel" v-show="currentModel == 1">
			<!-- 为你推荐 -->
			<view class="forYou">为你推荐</view>
			<singe-room></singe-room>
		</view>
		<!-- 交友 -->
		<view class="checkModel" v-show="currentModel == 2">
			<singe-room></singe-room>
		</view>
		<!-- 电台 -->
		<view class="checkModel" v-show="currentModel == 3">
			<singe-room></singe-room>
		</view>
		<!-- 游戏 -->
		<view class="checkModel" v-show="currentModel == 4">
			<singe-room></singe-room>
		</view>




	</view>
</template>

<script>
	import HomePage from "./HomePage.js"
	export default HomePage;
</script>

<style>
	@import url("./HomePage.css");
</style>

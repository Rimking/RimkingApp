<template>
	<view id="Myself">
		<!-- 个人信息不部分 -->
		<view class="selfConensts">
			<!-- headIMG -->
			<view class="fis">
				<view class="headImage">
					<u--image src="https://cdn.uviewui.com/uview/album/1.jpg" width="130rpx" height="130rpx"
						shape="circle">
					</u--image>
				</view>
				<view class="leftCens">
					<view class="userName">Rimking</view>
					<view class="userId">ID 15747745</view>
				</view>
				<view class="moreCons" @click="handlecons">
					<u-icon name="arrow-right" color="white"></u-icon>
				</view>
			</view>
			<!-- 关注。粉丝 -->
			<view class="userIndex">
				<view class="itemIs" v-for="item in indexList" :key="item.id">
					<view class="num">{{item.num}}</view>
					<view class="titles">{{item.titles}}</view>

				</view>
			</view>
		</view>
		<!-- 下方所有内容都再这里 -->
		<view id="bomConents">
			<!-- 做任务 -->
			<view class="dotask">
				<!-- 上方 -->
				<view class="doTosCOne">
					<view class="texts">做任务 领奖励</view>
					<view class="bsJds">
						<view class="jdtls">LV0 : </view>
						<view class="jdtLons"></view>
					</view>
					<view class="moreTask">更多任务 >
					</view>
				</view>
				<!-- 下方 -->
				<view class="btmCones">

					<!-- leftLogos -->
					<view class="leftLogs">
						<u--image src="../../static/imgs/hosse.png" width="50rpx" height="50rpx" shape="circle">
						</u--image>
					</view>
					<view class="btcon">
						互动时长
					</view>
					<view class="jfcons">
						<text style="color: gray; margin-right: 15rpx">积分</text><text style="color: #E9CCB4;">
							+100</text>
					</view>
					<!-- 右边去完成 -->
					<text class="toSuc">
						去完成
					</text>

				</view>
			</view>
			<!-- 特殊选项卡 -->
			<view class="spcSels">
				<view class="spcItems" v-for="item in spcList" :key="item.idx">
					<view class="tabULofs">
						<u--image :src="item.imUrl" width="70rpx" height="70rpx">
						</u--image>
					</view>
					<view class="tabUtiels">
						{{item.tils}}
					</view>
				</view>

			</view>

			<!-- 第一个展示i模块,利用组件封装 -->
			<!-- 更多功能 -->
			<tab-card :ModelList="moreList" ModelTils="更多功能"></tab-card>

			<!-- 服务与支持 -->
			<tab-card :ModelList="suporList" ModelTils="服务与支持"></tab-card>


		</view>





	</view>
</template>

<script>
	import Myself from "./Myself.js";
	export default Myself;
</script>

<style>
	@import url("./Myself.css");
</style>

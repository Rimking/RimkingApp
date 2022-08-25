<template>
	<view id="Privilerr">
		<view class="nav_cons">
			<view class="lefTils">消息2</view>
			<view class="cenrerCn"></view>
			<view class="rightBtn">
				<u-icon name="plus-circle" size="42rpx" color='black'></u-icon>
			</view>
		</view>
		<!-- 附近的人-->
		<view class="neiberHood">
			<!-- 标题栏 -->
			<view class="neberTils">
				<view class="lNerlgo">
					<u-icon name="tags" size="42rpx" color='black'></u-icon>
				</view>
				附近的人
			</view>
			<!--用户列表  -->
			<view class="userList">
				<view class="leftLoction">
					<text class="leftsCr"></text>
					<view class="headLogpo" style="background-image: linear-gradient(-45deg,#FACDAA,#FF8BA6);">
						<u-icon name="map-fill" size="80rpx" color='white'></u-icon>
					</view>
					<view class="hmiaos">更多</view>
					<view class="losornum" style="color: #B73A69;">人数{{nerberList.length}}人</view>
				</view>
				<!-- 右边循环内容 -->
				<view class="rightcons">
					<view class="leftLoction" v-for="item in nerberList" :key="item.id">
						<view class="headLogpo">
							<u--image width="115rpx" height="115rpx" :src="item.headUrl" shape="circle">
							</u--image>
						</view>
						<view class="hmiaos">{{item.userName}}</view>
						<view class="losornum">{{item.nerberLoc}}km</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 聊天内容 -->
		<view class="newSlist">
			<!-- 是否有内容,如歌没有内容，就这展示空提示 -->
			<view class="notHaveNews" v-show="newList.length == 0">
				<u-empty mode="list" width="300rpx" height="300rpx" textSize="24rpx" text="消息列表为空"
					icon="http://cdn.uviewui.com/uview/empty/car.png">
				</u-empty>
			</view>
			<!-- 消息列表 -->
			<view class="itemCons">
				<view class="itemDm" v-for="item in newList" :key="item.id">
					<view class="dms"></view>
					<view class="itemHead">
						<u--image :src="item.headUrl" width="110rpx" height="110rpx" shape="circle"></u--image>
					</view>
					<view class="itemCons">
						<view class="itmTils">{{item.userName}}</view>
						<view class="itmscons">[提醒消息]</view>
					</view>
					<view class="itemTime">07-27 03:05</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import Privilerr from "./Privilerr.js"
	export default Privilerr;
</script>

<style>
	@import url("Privilerr.css");
</style>

<template>
	<view class="PerNews">
		<status-bar title="完善信息"> </status-bar>
		<view class="leftB"></view>
		<view class="leftR"></view>


		<!-- 中间头像部分 ，使用上传图片的功能-->
		<view class="headImag">
			<image src="/static/imgs/login_bg.png"></image>

		</view>
		<view class="headMs">上传 <text>高清头像</text> ，更容易结交新朋友</view>

		<!-- 表单部分 -->
		<view class="loginView">
			<view class="inputPhone">
				<view class="leftLo">
					昵称
				</view>
				<view class="inputs">
					<input type="text" placeholder="请输入昵称">
				</view>
			</view>
			<view class="inputYzm">
				<view class="leftLo">性别</view>
				<view class="yzmCons">
					<radio-group @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
							<radio color="plum" style="transform:scale(0.7)" :value="item.value"
								:checked="index === current" />
							{{item.name}}
						</label>
					</radio-group>
				</view>

			</view>
			<view class="inputYzm">
				<view class="leftLo">出生年月</view>
				<view class="yzmCons">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>

			</view>



			<view class="inputYzm">
				<view class="leftLo">邀请码</view>
				<view class="yzmCons">
					<input type="text" placeholder="邀请码(选填)">
				</view>

			</view>
			<text class="tsNes">忘记密码?</text>

			<!-- 登录按钮  -->
			<view class="loginBtn" @click="handleLogin">确定</view>
		</view>



	</view>
</template>

<script>
	import PerNews from "./PerNews.js"
	export default PerNews;
</script>

<style lang="less">
	@import url("./PerNews.css");
</style>

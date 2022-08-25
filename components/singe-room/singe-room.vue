<template>
	<view class="singeRoom">

		<!-- 单个item height: 270rpx; -->
		<view class="singItems" v-for="(item) in itemList" :key="item.id">
			<!-- 背景图 -->
			<view class="singbgImage">
				<image :src=item.backGroundUrl></image>
			</view>
			<!-- 背景蒙版 -->
			<view class="singbgMb"></view>
			<!-- 具体内容 -->
			<view class="singeItemCon">

				<!-- 尬聊 -->
				<view class="embarrassing">
					<image src="../../static/imgs/chat.png" mode=""></image>
				</view>
				<!-- 直播标题 -->
				<view class="broadcastTil">
					{{item.broadcastTil}}
				</view>
				<!-- 下方用户部分 -->
				<view class="userComen">
					<view class="forImage">
						<!-- 单个用户头像 -->
						<view class="userOras" v-for="(ims) in item.childList" :key="ims.id">
							<image :src='ims.userImage'></image>
						</view>
					</view>
					<view class="hotoc">
						<view class="leflo">
							<image src="../../static/imgs/fire.png" mode=""></image>
						</view>
						<text>{{item.hoteNumer}}</text>
					</view>
				</view>


			</view>



		</view>

	</view>
</template>

<script>
	export default {
		name: "singe-room",
		data() {
			return {
				itemList: []
			}
		},
		created() {
			this.forEmageList();
		},
		methods: {
			forEmageList() {
				let list = [];
				let obj = {};
				let chilObj = {};
				let number = this.getRandomInt(1, 5);
				let number2 = this.getRandomInt(1, 10);
				let strs = "奇妙的魔幻世界~";

				for (let i = 1; i <= 10; i++) {

					switch (number2) {
						case 1 || 2:
							strs = "八点准时开始!!"
							break;
						case 3 || 4:
							strs = "戏精集结地~!"
							break;
						case 5 || 6:
							strs = "人生得意需尽欢"
							break;
						case 7 || 8:
							strs = "爱魔法的佩奇"
							break;
					}
					number2 = this.getRandomInt(1, 10);

					obj = {
						id: i * 15,
						broadcastTil: strs,
						backGroundUrl: require('../../static/zbBgImage/' + i + '.png'),
						hoteNumer: (number + number2) * 2,
					}
					obj.childList = [];

					for (let s = 1; s <= number; s++) {
						number = this.getRandomInt(1, 5);
						chilObj = {
								id: s * 2,
								userImage: require('../../static/userImage/user_' + s + '.png'),
							},

							obj.childList.push(chilObj)
					}

					list.push(obj);

				}


				this.itemList = list;
			},
			getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

		}
	}
</script>

<style>
	@import url("./singe-room.css");
</style>

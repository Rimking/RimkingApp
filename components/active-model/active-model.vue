<template>
	<view>
		<view class="acIemes" v-for="iem in 2">
			<!-- 头像部分固定，结尾有分割线，文字内容，可以展开，有点赞等等 -->
			<view class="reward">
				<view>悬赏</view>
			</view>
			<!-- 发布内容部分 -->
			<view class="rewaCons">
				<!-- 左边头像 -->
				<view class="leftHeads">
					<u--image width="100rpx" height="100rpx" src="https://cdn.uviewui.com/uview/album/1.jpg"
						shape="circle">
					</u--image>
				</view>
				<view class="rightCons">
					<!-- 模块上方 -->
					<view class="selfCons">
						<!-- 左边内容 -->
						<view class="leNamCons">
							<view class="userConslab">
								<text class="userName">欧尼</text>
								<text class="userSex">女</text>
								<text class="userAge">20</text>
							</view>
							<view class="sendTimes">
								3小时前
							</view>
						</view>

						<!-- 右边关注和三点按钮 -->
						<view class="follow">
							<view class="fsol">
								<text>关注</text>
							</view>
							<view class="ddd">
								<image src="../../static/imgs/sx.png" alt="">
							</view>
						</view>
					</view>
					<!-- 发布的文案信息 -->
					<view class="textCons">
						发布的文案信息 发布的文案信息 发布的文案信息 发布的文案信息
						发布的文案信息发布的文案信息 发布的文案信息发布的文案信息
					</view>
					<!-- 发布的图片部分 -->
					<view class="sendImages">
						<view class="itemImage">
							<image src="../../static/userImage/user_2.png" mode=""></image>
						</view>
						<view class="itemImage">
							<image src="../../static/userImage/user_3.png" mode=""></image>
						</view>
					</view>
					<!-- 悬赏部分 -->
					<view class="shopSel">
						<!-- 礼物 -->
						<view class="pricens">
							<image src="../../static/imgs/hg_colors.png" mode=""></image>
						</view>
						<!-- 描述 -->
						<view class="priCons">
							<view class="prTils">Rimking</view>
							<view class="prTils mons">
								<image src="../../static/imgs/zsS.png" mode=""></image>
								100.0
							</view>
						</view>
						<!-- 中奖人 -->
						<view class="luckPer">
							<view class="perS">
								<image src="../../static/userImage/user_5.png" mode=""></image>
							</view>
							<view class="lucTisl">恭喜Rimking</view>
						</view>

					</view>

					<!-- 点赞，收藏，评论 -->
					<view class="seTalsModel">
						<!-- 左边收藏等xxx -->
						<view class="funcMin">
							<view class="mi_mo">
								<view class="uims">
									<image src="../../static/imgs/active_news.png" mode=""></image>
								</view>
								1222
							</view>
							<view class="mi_mo">
								<view class="uims">
									<image src="../../static/imgs/active_dz.png" mode=""></image>
								</view>
								1222
							</view>
							<view class="mi_mo">
								<view class="uims">
									<image src="../../static/imgs/active_sc.png" mode=""></image>
								</view>
								1222
							</view>
						</view>
						<!-- 私聊他 -->
						<view class="sTalks">私聊Ta</view>
					</view>
				</view>

			</view>



		</view>
	</view>
</template>

<script>
	export default {
		name: "active-model",
		data() {
			return {

			};
		}
	}
</script>

<style>
	@import url("./active-model.css");
</style>

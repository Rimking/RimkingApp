<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch');


			uni.onTabBarMidButtonTap(() => {
				console.log("点击了中间的导航栏")
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},

	}
</script>1

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	// 引入图标库
	@import "@/static/iconfont.css";

	// 设置整个项目的背景色
	page {
		background-color: #FFFFFF;
		padding: 0;
		margin: 0;
		list-style: none;
	}
</style>

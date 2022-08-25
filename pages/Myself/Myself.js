import tabCard from "@/components/tab-card/tab-card.vue"
export default {
	data() {
		return {
			indexList: [{
					num: 50,
					titles: "私信",
					id: 1
				},
				{
					num: 135,
					titles: "关注",
					id: 2
				}, {
					num: 76,
					titles: "粉丝",
					id: 3
				}, {
					num: 66,
					titles: "最近来访",
					id: 4
				}
			],
			spcList: [{
					tils: "商城",
					id: 1,
					imUrl: "../../static/imgs/shop_colors.png",
					route: ""
				},
				{
					tils: "我的背包",
					id: 2,
					imUrl: "../../static/imgs/back_colors.png",
					route: ""
				},
				{
					tils: "钱包",
					id: 3,
					imUrl: "../../static/imgs/monback_colors.png",
					route: ""
				},
				{
					tils: "公会",
					id: 4,
					imUrl: "../../static/imgs/user_colors.png",
					route: ""
				},
				{
					tils: "贵族",
					id: 5,
					imUrl: "../../static/imgs/hg_colors.png",
					route: ""
				},
			],
			//更多功能列表
			moreList: [{
					tils: "认证中心",
					id: 1,
					imUrl: "../../static/imgs/moreFUnc/renzheng.png",
					route: ""
				},
				{
					tils: "我的等级",
					id: 2,
					imUrl: "../../static/imgs/moreFUnc/adrs.png",
					route: ""
				},
				{
					tils: "动态收藏",
					id: 3,
					imUrl: "../../static/imgs/moreFUnc/shouc.png",
					route: ""
				},
				{
					tils: "接待大厅",
					id: 4,
					imUrl: "../../static/imgs/moreFUnc/jdai.png",
					route: ""
				},
				{
					tils: "邀请有礼",
					id: 5,
					imUrl: "../../static/imgs/moreFUnc/invent.png",
					route: ""
				},
				{
					tils: "平台活动",
					id: 6,
					imUrl: "../../static/imgs/moreFUnc/active.png",
					route: ""
				},
				{
					tils: "占卜",
					id: 7,
					imUrl: "../../static/imgs/moreFUnc/zbu.png",
					route: ""
				},

			],
			// 服务与支持
			suporList: [{
					tils: "在线客服",
					id: 1,
					imUrl: "../../static/imgs/moreFUnc/kfuUser.png",
					route: ""
				},
				{
					tils: "关于应用",
					id: 2,
					imUrl: "../../static/imgs/moreFUnc/about.png",
					route: ""
				},
				{
					tils: "帮助",
					id: 3,
					imUrl: "../../static/imgs/moreFUnc/help.png",
					route: ""
				},
				{
					tils: "设置",
					id: 4,
					imUrl: "../../static/imgs/moreFUnc/eidt.png",
					route: ""
				},
			]


		}
	},
	components: {
		"tab-card": tabCard
	},
	methods: {
		handlecons() {

		},
	},

}

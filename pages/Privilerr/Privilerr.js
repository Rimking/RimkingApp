export default {
	data() {
		return {
			nerberList: [],
			newList: [{
				name: "123"
			}],
		}
	},
	created() {
		// 循环附近列表
		let list = [];
		for (let i = 1; i <= 8; i++) {
			let obj = {
				headUrl: `../../static/userImage/user_${i}.png`,
				userName: i + "c" + i + "Dme",
				nerberLoc: i + (i * 0.1),
				id: i
			}
			list.push(obj);
		}
		this.nerberList = list;

		// 循环消息列表
		let newslist = [];
		for (let i = 1; i <= 8; i++) {
			let obj = {
				headUrl: `../../static/userImage/user_${i}.png`,
				userName: i + "c" + i + "Dme",
				childrenList: [{
					username: "cons"
				}],
				id: i
			}
			newslist.push(obj);
		}
		this.newList = newslist;



	},
	components: {},
	methods: {


	}
}

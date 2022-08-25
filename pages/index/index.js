export default {
	data() {
		return {

		}
	},
	methods: {
		handlePhoneLogin() {
			console.log("12324");
			uni.navigateTo({
				url: '/pages/PhoneL/PhoneL'
			});
		},
		handleWechatLogin() {
			console.log("12324")
		},
		handleQQLogin() {
			console.log("12324")
		},
	},

}

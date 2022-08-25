import statusbar from "@/components/status-bar/status-bar.vue"
export default {
	data() {
		return {
			jumpUrl: "/pages/PwdL/PwdL",

		}
	},
	components: {
		"status-bar": statusbar
	},
	created() {},
	methods: {
		handleLogin() {
			uni.navigateTo({
				url: "/pages/PerNews/PerNews"
			})
		},

	}
}

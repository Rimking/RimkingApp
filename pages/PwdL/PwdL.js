import statusbar from "@/components/status-bar/status-bar.vue"
export default {
	data() {
		return {
			jumpUrl: "/pages/PhoneL/PhoneL"
		}
	},
	components: {
		"status-bar": statusbar
	},
	methods: {
		handleLogin() {
			uni.navigateTo({
				url: "/pages/PerNews/PerNews"
			})
		},
	}
}

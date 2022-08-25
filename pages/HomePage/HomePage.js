import navBar from "@/components/nav-bar/nav-bar.vue"
import singeRoom from "@/components/singe-room/singe-room.vue"
export default {
	data() {
		return {
			currentModel: 1,
		}
	},
	components: {
		"nav-bar": navBar,
		"singe-room": singeRoom
	},
	methods: {
		// 接受bar传来的当前展示的内容
		rightAction(data) {
			this.currentModel = data
		},

	}
}

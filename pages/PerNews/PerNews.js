export default {
	data() {
		const currentDate = this.getDate({
			format: true
		})
		return {
			items: [{
					value: "0",
					name: '男'
				},
				{
					value: "1",
					name: '女'
				},
			],
			current: 0,
			date: currentDate,
		}
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	},
	methods: {
		radioChange(evt) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].value === evt.detail.value) {
					this.current = i;
					break;
				}
			}
		},
		bindDateChange: function(e) {
			this.date = e.detail.value
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		handleLogin() {
			console.log(123)
			uni.switchTab({
				url: "/pages/Myself/Myself"
			})
		},
	}
}

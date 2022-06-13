var homepage;

function homepageInit() {
	homepage = new Vue({
		el: "#homepage",
		data: {
			isCurrent: false,
			username: "",
		},
		methods: {
			goBack() {
				showPage("loginpage")
			}
		},
		watch: {
			isCurrent: function (val) {
				if (val) {
					this.username = USER;
				}
			},
		}
	});

	return homepage;
}

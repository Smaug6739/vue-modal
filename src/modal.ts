import { defineComponent } from "vue";


export default defineComponent({
	name: "Window",
	props: {
		windowName: {
			type: String,
			required: true,
		},
	},
	methods: {
		openWindow(): void {
			const window = document.getElementById("window");
			if (window) window.style.display = "block";
		},
		closeWindow(): void {
			const window = document.getElementById("window");
			if (window) window.style.display = "none";
		},
	},
	mounted() {
		const window = document.getElementById("window");
		if (!window) return;
		window.onclick = function (event) {
			if (event.target == window) {
				window.style.display = "none";
			}
		};
	},
});

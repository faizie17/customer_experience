function feedback_box() {
	const formBox = document.querySelector("#hospitalFormBox")
	formBox.addEventListener("submit", (e) => {
		e.preventDefault()
		const hospital_users_box = formBox.elements["hospital_users_box"].value
		const hospital_zone_box = formBox.elements["hospital_zone_box"].value
		const options = formBox.elements["options"].value

		frappe.call({
			method: "frappedesk.customer_experience_management.feedback.nps_smiley",
			args: {
				doctype: "Hospital CXM",
				hospital_users_box: hospital_users_box,
				hospital_zone_box: hospital_zone_box,
				options: options,
			},
			success: function (r) {
				console.log(r)
			},
		})
	})
}

feedback_box()

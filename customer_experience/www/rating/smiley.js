// const formContainer = document.querySelector('#main-heading');
// formContainer.style.color = 'blue';

const form1 = document.querySelector("#hospitalForm")
document.querySelectorAll(`input[type="radio"]`).forEach((item) =>
	item.addEventListener("click", (e) => {
		const hospital_users = form1.elements["hospital_users"].value
		const hospital_zone = form1.elements["hospital_zone"].value
		const hospital_rating = form1.elements["smiley"].value
		frappe.call({
			method: "frappedesk.customer_experience_management.feedback.smiley",
			args: {
				doctype: "Hospital CXM",
				hospital_users: hospital_users,
				hospital_zone: hospital_zone,
				hospital_rating: hospital_rating,
			},
			freeze: true,
			freeze_message: __("THANK YOU"),
			success: function (r) {
				console.log(r)
			},
		})
	})
)

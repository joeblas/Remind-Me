let phone = $("#phonenumber");

phone.prop('defaultValue');
phone.css("display", "none");


$("#add-reminder").on("click", function(){
	let phoneNumber = $("#phonenumber").val()
	let reminder = $("#reminder-input").val()
	console.log(phoneNumber, reminder)

	$.ajax({
		method: "POST",
		url: "/create-todo",
		data: {
			phoneNumber: phoneNumber,
			reminder: reminder
		}
	}).then(function(res){
		console.log(res);


	})

	$(".form-group").each(function(){
		this.empty();
	})
})
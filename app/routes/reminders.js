var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

// var twilio = require('twilio');
var client = require('twilio')(accountSid, authToken);

module.exports = function(app){

app.post("/create-todo", function(req, res){
	console.log(req.body)
	let phoneNumber = req.body.phoneNumber;
	let reminder = req.body.reminder;
	client.messages.create({
		
		body: reminder,
		to: phoneNumber,  // Text this number
		from: process.env.TWILIO_PHONE_NUMBER // From a valid Twilio number
	})
	.then((message) => console.log(message.sid)).catch(function(err){ console.log(err)})
})

}

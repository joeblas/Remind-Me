// Twilio Credentials 
var accountSid = 'AC6b99dd93c884cce75377bf5a78821f94'; 
var authToken = '8a96625612a58aefc260ebf30dbb340c'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+15558675309", 
    from: "+15017250604", 
    body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
}, function(err, message) { 
    console.log(message.sid); 
});
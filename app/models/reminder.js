module.exports = function(sequelize, Sequelize) {
	
		var Reminder = sequelize.define('reminder', {
			name: Sequelize.STRING,
			phoneNumber: Sequelize.STRING,
			notification: Sequelize.INTEGER,
			timeZone: Sequelize.STRING,
			time: Sequelize.DATE, 
			
	});
	
		return Reminder;
	
	}
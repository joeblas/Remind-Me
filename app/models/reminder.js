module.exports = function(sequelize, Sequelize) {
	
		var Reminder = sequelize.define('Reminder', {
			name: Sequelize.STRING
			
	});
		Reminder.associate = function(models){
			Reminder.belongsTo(models.User, {
				foreignKey: {
					allowNull: false
				}
			})
		}
		return Reminder;
	
	}
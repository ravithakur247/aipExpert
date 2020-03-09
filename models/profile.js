const { sequelize } = require('../dbConfig/sequelize');
const Sequelize = require('sequelize');
const Profile = sequelize.define('profile', {
    profileId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    profileName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profileImageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }

});
module.exports = { Profile }




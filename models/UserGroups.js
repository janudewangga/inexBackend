module.exports = function (db, sequelize) {
    return db.define('UserGroups', {
        status: {
            type: sequelize.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'active'
        }
    });
};
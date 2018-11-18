module.exports = function (db, sequelize) {
    return db.define('GroupPrivileges', {
        status: {
            type: sequelize.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'active'
        }
    });
};
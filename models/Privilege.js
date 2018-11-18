module.exports = function (db, sequelize) {
    return db.define('Privilege', {
        id: {
            type: sequelize.INTEGER(5).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: sequelize.STRING(100),
            allowNull: false,
            unique: true
        },
        status: {
            type: sequelize.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'active'
        }
    });
};
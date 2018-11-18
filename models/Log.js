module.exports = function (db, sequelize) {
    return db.define('Log', {
        id: {
            type: sequelize.UUID,
            allowNull: false,
            defaultValue: sequelize.UUIDV4,
            primaryKey: true
        },
        userId: {
            type: sequelize.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        privilegeId: {
            type: sequelize.INTEGER(5).UNSIGNED,
            allowNull: false
        },
        affectedData: {
            type: sequelize.JSON,
            allowNull: true
        },
        description: {
            type: sequelize.JSON,
            allowNull: true
        },
        ipAddress: {
            type: sequelize.STRING(100),
            allowNull: false
        },
        status: {
            type: sequelize.ENUM('success', 'failed'),
            allowNull: false,
            defaultValue: 'success'
        }
    });
};
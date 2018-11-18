module.exports = function (db, sequelize) {
    return db.define('Log', {
        id: {
            type: sequelize.UUID,
            allowNull: false,
            defaultValue: sequelize.UUIDV4,
            primaryKey: true
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
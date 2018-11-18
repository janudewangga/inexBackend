module.exports = function (db, sequelize) {
    return db.define('User', {
        id: {
            type: sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        identityType: {
            type: sequelize.STRING(50),
            allowNull: true
        },
        identity: {
            type: sequelize.STRING(100),
            allowNull: true
        },
        name: {
            type: sequelize.STRING(100),
            allowNull: false
        },
        sex: {
            type: sequelize.ENUM('M', 'F'),
            allowNull: true
        },
        dateOfBirth: {
            type: sequelize.DATEONLY,
            allowNull: true
        },
        address: {
            type: sequelize.STRING(200),
            allowNull: true
        },
        phone: {
            type: sequelize.STRING(15),
            allowNull: true
        },
        email: {
            type: sequelize.STRING(191),
            allowNull: true
        },
        password: {
            type: sequelize.STRING(200),
            allowNull: true
        },
        currency: {
            type: sequelize.CHAR(3),
            allowNull: false,
            defaultValue: 'IDR'
        },
        language: {
            type: sequelize.CHAR(2),
            allowNull: false,
            defaultValue: 'en'
        },
        timezone: {
            type: sequelize.FLOAT(4, 2),
            allowNull: false,
            defaultValue: 7
        },
        status: {
            type: sequelize.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'inactive'
        }
    });
};
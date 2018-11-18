const sequelize = require('sequelize');
const Op = sequelize.Op;
const config = require('./config');
const db = new sequelize(config.db.name, config.db.user, config.db.password, {
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
    host: config.db.host,
    port: config.db.port,
    define: {
        timestamps: true
    }
});
db.authenticate().then(() => {
    console.log('Database ready to use.');
}).catch(error => {
    console.log('Database error: ' + error);
});
const User = require('./models/User')(db, sequelize);
const Group = require('./models/Group')(db, sequelize);
const Privilege = require('./models/Privilege')(db, sequelize);
const UserGroups = require('./models/UserGroups')(db, sequelize);
const GroupPrivileges = require('./models/GroupPrivileges')(db, sequelize);
const Log = require('./models/Log')(db, sequelize);
User.belongsToMany(Group, {
    through: UserGroups,
    as: 'Groups'
});
Group.belongsToMany(User, {
    through: UserGroups,
    as: 'Users'
});
Group.belongsToMany(Privilege, {
    through: GroupPrivileges,
    as: 'Privileges'
});
Privilege.belongsToMany(Group, {
    through: GroupPrivileges,
    as: 'Groups'
});
Log.belongsTo(User, {
    as: 'User'
});
Log.belongsTo(Privilege, {
    as: 'Privilege'
});
module.exports = {
    db,
    sequelize,
    Op,
    User,
    Group,
    Privilege,
    Log,
    GroupPrivileges,
    UserGroups
};
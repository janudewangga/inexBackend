const sequelize = require('sequelize');
const Op = sequelize.Op;
const config = require('./config');
const db = new sequelize(null, null, null, {
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
    host: config.db.host,
    port: config.db.port,
    define: {
        timestamps: true
    }
});
const User = require('./models/User')(db, sequelize);
const Group = require('./models/Group')(db, sequelize);
const Privilege = require('./models/Privilege')(db, sequelize);
const Log = require('./models/Log')(db, sequelize);
const i18n = require('i18n');
const config = require('./config');
const db = require('./db');
module.exports = {
    addLog: function (ipAddress, userId, privilegeId, status, affectedData, description) {
        let data = {
            ipAddress: ipAddress,
            UserId: userId,
            PrivilegeId: privilegeId,
            status: status,
            affectedData: affectedData,
            description: description
        };
        db.Log.create(data).then(dataLog => {
            console.log('Log ID: ' + dataLog.id + ', at: ' + dataLog.createdAt);
        }).catch(error => {
            console.log('Logging error: ' + error);
        });
    },
    inputFilter: function (inputVal) {
        return inputVal;
    },
    jsonResultGenerator: function (status, code, data) {
        let result = {
            resultStatus: status,
            resultCode: code,
            resultMsg: this.msgTranslator(code),
            data: data
        };
        return result;
    },
    msgTranslator: function (code) {
        return i18n.__('msg' + code + '');
    }
};
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');
router.get('/', function (req, res) {
    res.send('API');
});
router.get('/init', function (req, res) {
    // bcrypt.hash('admin', 11, function (error, hashResult) {
    //     db.User.bulkCreate([
    //         {name: 'Public', email: 'public@system.system', password: '_pass', status: 'active'},
    //         {name: 'System', email: 'system@system.system', password: hashResult, status: 'active'},
    //         {name: 'Administrator', email: 'admin@system.system', password: hashResult, status: 'active'}
    //     ]).then(() => {
    //         res.send('Users created');
    //     });
    // });
    // db.Group.bulkCreate([{name: 'Administrator'}, {name: 'Operator'}, {name: 'Agent'}, {name: 'Courier'}, {name: 'Finance'}, {name: 'Client'}]);
    // db.Privilege.bulkCreate([
    //     {name: 'login'},
    //     {name: 'logout'},
    //     {name: 'changePassword'},
    //     {name: 'changeProfile'},
    //     {name: 'addUser'},
    //     {name: 'viewUsers'},
    //     {name: 'viewUser'},
    //     {name: 'editUser'},
    //     {name: 'deleteUser'},
    //     {name: 'addArea'},
    //     {name: 'viewAreas'},
    //     {name: 'viewArea'},
    //     {name: 'editArea'},
    //     {name: 'deleteArea'},
    //     {name: 'addAgentArea'},
    //     {name: 'viewAgentAreas'},
    //     {name: 'viewAgentArea'},
    //     {name: 'editAgentArea'},
    //     {name: 'deleteAgentArea'},
    //     {name: 'addWeight'},
    //     {name: 'viewWeights'},
    //     {name: 'viewWeight'},
    //     {name: 'editWeight'},
    //     {name: 'deleteWeight'},
    //     {name: 'addDeliveryMethod'},
    //     {name: 'viewDeliveryMethods'},
    //     {name: 'viewDeliveryMethod'},
    //     {name: 'editDeliveryMethod'},
    //     {name: 'deleteDeliveryMethod'},
    //     {name: 'addService'},
    //     {name: 'viewServices'},
    //     {name: 'viewService'},
    //     {name: 'editService'},
    //     {name: 'deleteService'},
    //     {name: 'addPricing'},
    //     {name: 'viewPricings'},
    //     {name: 'viewPricing'},
    //     {name: 'editPricing'},
    //     {name: 'deletePricing'},
    //     {name: 'addPacket'},
    //     {name: 'viewPackets'},
    //     {name: 'viewPacket'},
    //     {name: 'editPacket'},
    //     {name: 'deletePacket'},
    //     {name: 'addPacketTracking'},
    //     {name: 'viewPacketTrackings'},
    //     {name: 'viewPacketTracking'},
    //     {name: 'editPacketTracking'},
    //     {name: 'deletePacketTracking'},
    //     {name: 'addPickup'},
    //     {name: 'viewPickups'},
    //     {name: 'viewPickup'},
    //     {name: 'editPickup'},
    //     {name: 'deletePickup'},
    //     {name: 'addManifest'},
    //     {name: 'viewManifests'},
    //     {name: 'viewManifest'},
    //     {name: 'editManifest'},
    //     {name: 'deleteManifest'}
    // ]);
    // db.UserGroups.bulkCreate([{UserId: 1, GroupId: 6}, {UserId: 2, GroupId: 1}, {UserId: 3, GroupId: 1}]);
    // let gps = [];
    // for (let i = 1; i <= 59; i++) {
    //     gps.push({GroupId: 1, PrivilegeId: i});
    // }
    // db.GroupPrivileges.bulkCreate(gps);
    res.send("Initiation done. Finish.");
});
module.exports = router;
// Import the ORM to create functions to interact with the DB
var orm = require("../config/orm.js");

// =============== NEED TO EDIT LOGIC BELOW =================== //

// Create the code that will call the ORM functions using burger specific input for the ORM.
var alchemy = {

    selectAll: function(table, callback) {
        orm.selectAll(table, function(res) {
            callback(res);
        });
    },

    insertOne: function(username, callback) {
        orm.insertOne(burger_name, function(res) {
            callback(res);
        });
    },

    updateOne: function(alchemyID, callback) {
        orm.updateOne(alchemyID, function(res) {
            callback(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = alchemy;
// Import MySQL connection.
var connection = require("../config/connection.js");

// Methods for MySQL commands
var orm = {

    // =================== NEED TO EDIT BELOW TO MATCH DB ================= //

    // =================== selectAll() =================== //
    selectAll: function(table, callback) {
        // Run MySQL Query
        connection.query('SELECT * FROM alchemy_table', function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    // ================ insertOne() ===================== //
    insertOne: function(username, callback) {

        // Run MySQL Query
        connection.query('INSERT INTO alchemy_table (username, gender, age, sign, photo) values (?,?,?,?,?)', [
            burger_name,
            '0',
            timestamp
        ], function(err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    // ================= updateOne() ==================== //
    updateOne: function(alchemyID, callback) {

        // Run MySQL Query
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

// ================================================================================ //

// Export the ORM object in module.exports.
module.exports = orm;
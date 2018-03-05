// Matches to each user sign

module.exports = function(sequelize, DataTypes) {

    var Signs = sequelize.define("Signs", {
        sign: {
            type: DataTypes.TEXT
        },
        matches: {
            type: DataTypes.TEXT
        }
    }, { timestamps: false });

    return Signs;

};
// Match association 

module.exports = function(sequelize, DataTypes) {
    var Matches = sequelize.define("Matches", {

        name: {
            type: DataTypes.STRING,
            required: true
        },

        email: {
            type: DataTypes.STRING,
            required: true
        },

        sign: {
            type: DataTypes.STRING,
            required: true
        },

        image: {
            type: DataTypes.STRING,
            required: true
        },

        location: {
            type: DataTypes.STRING,
        },

        active: {
            type: DataTypes.BOOLEAN,
        }
    });

    Matches.associate = function(models) {
        // We're saying that Matches should belong to an User
        // A Match can't be created without an User due to the foreign key constraint
        Matches.belongsTo(models.User, {
            foreignKey: {
                //allowNull: false
            }
        });

    };

    return Matches;
};
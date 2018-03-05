// User Association 

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            required: true
        },

        email: {
            type: DataTypes.STRING,
            required: true,
            validate: { isEmail: true }
        },

        sign: {
            type: DataTypes.STRING,
            required: true
        },

        image: {
            type: DataTypes.TEXT,
            required: true,
            validate: { isUrl: true }
        },

        preference: {
            type: DataTypes.STRING,
            required: true
        },

        location: {
            type: DataTypes.STRING
        },

        localPassword: {
            type: DataTypes.STRING,
            required: true
        },

        active: {
            type: DataTypes.BOOLEAN,
        }

    });

    // Methods ======================
    // Generating a hash
    User.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // Checking if password is valid
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.localPassword);
    };

    User.associate = function(models) {
        // Associating User with multiple Matches
        // When an User is deleted, also delete any associated Matches
        User.hasMany(models.Matches, {
            onDelete: "cascade"
        });

    };

    return User;
};
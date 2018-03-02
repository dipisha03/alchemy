module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        // [Gender] VARCHAR(6) NOT NULL
        //  CHECK ([Gender] IN ('Male', 'Female')

        // age: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }

        // },

        usersign: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },

        // Can be NVARCHAR for DateTypes if TEXT doesnt work
        // photo: {
        //     type: DataTypes.TEXT,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },

        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,

        }

    });

    User.associate = function(models) {

        // We want the user to be matched to the compatible signs
        models.User.hasMany(models.signs);

    };

    return User;

};
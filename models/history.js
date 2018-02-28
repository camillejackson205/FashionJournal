module.exports = function(sequelize, DataTypes) {
    return sequelize.define('history', {
        occassion: DataTypes.STRING,
        weather: DataTypes.STRING,
        mood: DataTypes.STRING,
        outfit: DataTypes.STRING,
        owner : DataTypes.INTEGER
    },{
    });
};
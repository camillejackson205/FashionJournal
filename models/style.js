// build a model in sqllize

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('style', {
        occassion: DataTypes.STRING,
        weather: DataTypes.STRING,
        mood: DataTypes.STRING,
        outfit: DataTypes.STRING,
        owner : DataTypes.INTEGER
    },{
    });
};
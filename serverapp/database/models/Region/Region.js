module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "Region",
    {
      ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strName: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      PID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Region;
};

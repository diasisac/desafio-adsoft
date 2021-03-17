module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    username: DataTypes.STRING,
    senha: DataTypes.STRING,
    salt: DataTypes.STRING,
    datacriacao: DataTypes.STRING,
  },{
    tableName: 'usuario'
  });

  return User;
}

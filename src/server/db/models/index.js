import Sequelize, {DataTypes} from 'sequelize'
import process from 'process'

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Community = sequelize.define('Community', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING
});

const Transaction = sequelize.define('Transaction', {
  amount: DataTypes.NUMBER,
});

Transaction.belongsTo(Community)

const db = {
  sequelize,
  Sequelize: Sequelize,
  Community,
  Transaction
}

export default db

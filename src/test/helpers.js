import db from '../server/db/models'
import { map } from 'lodash'


export async function cleanDB() {
    return Promise.all(
      map(Object.keys(db), (key) => {
        if (['sequelize', 'Sequelize'].includes(key)) return null;
        return db[key].destroy({ where: {}, force: true, logging: false });
      })
    );
  }


'use strict';

import { v4 as uuidv4 } from 'uuid';

async function up(queryInterface) {
  return queryInterface.bulkInsert('Communities', [{
    id:  uuidv4(),
    firstName: 'Snoop',
    lastName: 'Dog',
    phone: '111-222-3333',
    email: 'snoopydog@dogpound.com',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    id:  uuidv4(),
    firstName: 'Scooby',
    lastName: 'Doo',
    phone: '444-555-6666',
    email: 'scooby.doo@misterymachine.com',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    id:  uuidv4(),
    firstName: 'Herbie',
    lastName: 'Husker',
    phone: '402-437-0001',
    email: 'herbie.husker@unl.edu',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }], {returning: ['id']});
}

async function down(queryInterface) {
  return queryInterface.bulkDelete('Communities', null, {});
}

export {up, down}
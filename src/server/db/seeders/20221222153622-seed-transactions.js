import { v4 as uuidv4 } from 'uuid';

async function up(queryInterface) {
  const community = await queryInterface.sequelize.query(
    `SELECT id from Communities;`
  )

  const communityIds = community[0]

  return queryInterface.bulkInsert('Transactions', [
    {
      id: uuidv4(),
      amount: 1000,
      communityId: communityIds[0].id,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      id: uuidv4(),
      amount: 1000,
      communityId: communityIds[1].id,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
  ])
}

async function down(queryInterface) {
  return queryInterface.bulkDelete('Transactions', null, {});
}


export {up, down}
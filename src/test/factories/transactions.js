import db from '../../../src/server/db/models'


export default async function TransactionFactory() {
    const community = await db.Community.create({
        firstName: 'Snoop',
        lastName: 'Dog',
        phone: '111-222-3333',
        email: 'snoopydog@dogpound.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
    }, { logging: false })

    return db.Transaction.create({
        amount: 1000,
        CommunityId: community.id,
        Community: community,
    }, { logging: false })
}
import db from '../../../src/server/db/models'
import { v4 as uuidv4 } from 'uuid';


export default async function TransactionFactory(overrides = {}) {
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
        Community: community
    }, { logging: false })
}
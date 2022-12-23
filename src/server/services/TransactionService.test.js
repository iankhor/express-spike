import TransactionsService from "./TransactionsService";
import TransactionFactory from './../../test/factories/transactions'
import { cleanDB } from './../../test/helpers'
import db from './../db/models'

describe('TransactionService', () => {
    beforeEach(async () => { await db.sequelize.sync({ force: true, logging: false }) })
    afterEach(async () => { await cleanDB() })

    describe('showMeTheMoney()', () => {
        it('doubles the amount', async () => {
            const startAmount = 5000
            const endAmount = startAmount * 2
            const tx = await TransactionFactory({ amount: startAmount })
            const service = new TransactionsService(tx.id, startAmount)
            await service.showMeTheMoney()

            const y = await db.Transaction.findOne({where: {id: tx.id}})
            expect(y.amount).toEqual(endAmount)
        })
    })
})
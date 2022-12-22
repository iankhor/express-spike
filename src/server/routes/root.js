import db from '../db/models'
import TransactionsPresenter from '../presenters/TransactionsPresenter'
import TransactionsService from '../services/TransactionsService'
import {shuffle, random} from 'lodash'

//For demo purposes
async function randomDemo() {
    const uuid = shuffle(await db.Transaction.findAll())[0].id
    const amount = random(0,9999)

    return {  uuid, amount }
}

export default async function root(req, res) {
    const { uuid, amount } = await randomDemo()
    const service = new TransactionsService(uuid, amount)
    await service.showMeTheMoney()

    const transactions = await db.Transaction.findAll({ include: db.Community })
    const presenter = new TransactionsPresenter(transactions)

    res.json(presenter.transactions())
}

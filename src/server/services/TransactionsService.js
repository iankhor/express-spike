import db from '../db/models'

export default class TransactionsService {
    constructor(uuid, amount) {
        this.uuid = uuid
        this.amount = amount
    }
    async showMeTheMoney() {
        db.Transaction.update(
            { amount: this.amount * 2 },
            { where: { id: [this.uuid] } },
        )
    }
}
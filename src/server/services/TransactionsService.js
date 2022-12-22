import db from '../db/models'

export default class TransactionsService {
    constructor(uuid, amount) {
        this.uuid = uuid
        this.amount = amount
    }
    showMeTheMoney() {
        db.Transaction.update(
            { amount: this.amount },
            { where: { id: [this.uuid] } }
        )
    }
}
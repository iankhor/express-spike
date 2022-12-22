export default class TransactionPresenter {
    constructor(tx) {
        this.tx = tx
    }

    transactions() {
        return this.tx.map(t => this.#formatTransactions(t))
    }

    #formatTransactions(t) {
        return { name: this.#name(t), owning: t.amount }
    }

    #name(t) {
        return  [t.Community.firstName, t.Community.lastName].join(' ')
    }
}
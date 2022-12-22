import express, { json } from 'express';
import db from './db/models'
import TransactionPresenter from './presenter/TransactionPresenter.js'

const app = express();

app.use(json())

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const transactions = await db.Transaction.findAll({ include: db.Community })
    const presenter = new TransactionPresenter(transactions)
    const tx = await presenter.transactions()

    res.json(tx)
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));

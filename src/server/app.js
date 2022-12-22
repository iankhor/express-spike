import express, { json } from 'express';
import db from './db/models'

const app = express();

app.use(json())

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const comms = await db.Community.findAll()
    const transaction = await db.Transaction.findAll()

    res.json(transaction)
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));

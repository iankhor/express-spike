import express, { json } from 'express';
import router from './routes'

const app = express();

app.use(json())
app.use('/', router)

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`App listening at port ${PORT}`));

export default app
export { server }
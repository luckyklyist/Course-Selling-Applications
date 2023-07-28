import express, { Response } from 'express'
import bodyParser from 'body-parser';
import connectDB from './db';

const app = express();
const PORT = process.env.PORT || 5001;
import Routes from './routes/index.routes';

app.use(bodyParser.json());
app.get('/checkHealth', (_, res: Response) => res.send({ message: "Server is running" }))
app.use('/api/v1', Routes);

connectDB();

app.listen(PORT, () => console.log(`Server running at the port ${PORT}`));

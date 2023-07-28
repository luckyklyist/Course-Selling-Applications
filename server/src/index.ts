import express, { Response } from 'express'


const app = express();
const PORT = process.env.PORT || 5001;

app.get('/checkHealth', (_, res: Response) => res.send({ message: "Server is running" }))

app.listen(PORT, () => console.log(`Server running at the port ${PORT}`));

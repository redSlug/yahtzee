import express from 'express';
import { db } from './db/index.js'; // Your Drizzle connection
import { game } from './db/schema.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;


const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // Only allow requests from your frontend
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {

    res.send(`Hello bradley!`);
});

app.get('/games', async (req, res) => {
    const allGames = await db
        .select()
        .from(game);
    res.status(200).send(allGames);
})

app.put('/game', async (req, res) => {
    const game = await db.insert(game).values({});
    res.status(200).send(game);
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`server on port ${PORT}`);
});
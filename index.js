import express from 'express';
import cors from 'cors'; // ✅ import cors
import 'dotenv/config';
import { router } from './src/Routes/route.js';

const app = express();

const frontendUrl = [
  'https://www.satshreesteel.in/',
  'https://satshreesteel.in/'
];

app.use(cors({
  origin: frontendUrl,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use("/api/v1/user", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
});

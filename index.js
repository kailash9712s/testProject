import express from 'express';
import cors from 'cors'; // ✅ import cors
import 'dotenv/config';
import { router } from './src/Routes/route.js';

const app = express();

// ✅ Enable CORS for all routes
app.use(cors({
    origin: '*', // Replace * with your frontend URL in production, e.g., 'http://localhost:5500'
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use("/api/v1/user", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
});

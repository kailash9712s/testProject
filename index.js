import express from 'express';
import cors from 'cors'; // ✅ import cors
import 'dotenv/config';
import { router } from './src/Routes/route.js';

const app = express();

// ✅ Enable CORS for all routes
app.use(cors({
  origin: 'https://frontend-silk-nu-36.vercel.app', // or "*" for all origins (not recommended for production)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use("/api/v1/user", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
});

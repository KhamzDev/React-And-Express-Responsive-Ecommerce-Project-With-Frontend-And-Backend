import express from "express";
import cors from 'cors';
import routes from "./routes/index.mjs"

const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
};
app.use(cors(corsOptions));
app.use(routes)

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
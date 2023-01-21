import "dotenv/config";
import express from "express";
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

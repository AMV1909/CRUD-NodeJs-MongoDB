import express from 'express';
import { router } from "./routes/routes.js";

const app = express();
import "./db.js";

// Settings
app.set("port", 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(router);

// Starting the server
app.listen(app.get("port"), () => {
    console.log('Server on port', app.get("port"));
});
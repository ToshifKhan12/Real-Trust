import path, { dirname } from "path"
import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectToMongoDB from "./config/ConnectedToMongoDB.js"
import projectRoutes from "./routes/project.route.js"
import clientRoutes from "./routes/client.route.js"
import contactRoutes from "./routes/contact.route.js"
import subscriptionRoutes from "./routes/subscription.route.js"

const app = express();

const __dirname = path.resolve();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/subscription', subscriptionRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectToMongoDB();
});

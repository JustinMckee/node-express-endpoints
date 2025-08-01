import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/users.js';
// App Config
const app = express();
// Add this middleware to allow CORS
app.use(
	cors({
		origin: 'http://localhost:3000', // Allow requests from your frontend origin
	})
);
app.use(express.json());
// Routes Config
app.use('/users', userRoutes);

// Run
const port = 3333;
const host = 'localhost';
app.listen(port, () => {
	console.log(`Server running at http://${host}:${port}/`);
});

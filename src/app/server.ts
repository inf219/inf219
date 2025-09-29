import express from 'express';
import bodyParser from 'body-parser';
import { initializeDatabase, saveMapping, getAllMappings } from './database';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // For å servere frontend-filer

// Initialiser databasen
initializeDatabase();

// Dummy login
app.post('/login', (req, res) => {
    const { username } = req.body;
    if (username === 'dummy') {
        res.json({ success: true, message: 'Logged in as dummy' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username' });
    }
});

// Opprett en agent
app.post('/agents', async (req, res) => {
    const { userId, agentId } = req.body;
    try {
        await saveMapping(userId, agentId);
        res.json({ success: true, message: 'Agent created' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create agent' });
    }
});

// Hent alle agenter
app.get('/agents', async (req, res) => {
    try {
        const mappings = await getAllMappings();
        res.json(mappings);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch agents' });
    }
});

// Start serveren
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
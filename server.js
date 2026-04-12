import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cookieParser());

// Environment variable containing the true password
const PASSWORD = process.env.LOGIN_PASSWORD || 'ottoshortking';

// 1. Password verification endpoint
app.post('/api/login', (req, res) => {
    if (req.body.password === PASSWORD) {
        // Issue secure HTTP-only cookie
        res.cookie('alexispaul_session', 'authenticated', { 
            httpOnly: true, 
            maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
            sameSite: 'strict'
        });
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
});

// 2. Auth checking endpoint for App mount
app.get('/api/check', (req, res) => {
    if (req.cookies.alexispaul_session === 'authenticated') {
        res.json({ authenticated: true });
    } else {
        res.status(401).json({ authenticated: false });
    }
});

// 3. Serve the static Vite compiled frontend
app.use(express.static(path.join(__dirname, 'dist')));

// Send all other requests to index.html (SPA history fallback)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start listening
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

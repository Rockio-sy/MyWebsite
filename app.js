const express = require('express');
const path = require('path');
const app = express();

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Portfolio site running at http://localhost:${PORT}`);
});

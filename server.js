const express = require('express');
const path = require('path');
const app = express();

// MIDDLEWARE TO DEFINE FOLDER FOR STATIC FILES
app.use(express.static('public'));

// DEFINES THE MAIN ENTRY POINT
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(3000, () => {
    console.log('app is listening on port 3000');
})
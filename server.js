const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

const items = require('./routes/api/items');

const path = require('path');

// Body Parser Middleware 
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Use Routes
app.use('/api/items', items);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {

    // Set static folder 
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(error => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


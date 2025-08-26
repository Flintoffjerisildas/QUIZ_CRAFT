const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('./config/db')
const app = express();

app.use(express.json({ extended: false }));

// Connect DB
mongoose();


// Route Connection
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

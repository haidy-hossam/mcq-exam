const express = require('express');
const cors = require('cors');
const db = require('./util/db');

const PORT = process.env.PORT || 3001;

const app = express();

db.connect();

db.createMCQ();

app.use(express.json());
app.use(cors());

app.use('/api/mcq', require('./routes/mcq'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

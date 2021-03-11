const express = require('express');
const logger = require('morgan');

const app = express();

require('dotenv').config(); 
require('./config/database');

app.use(express.json());
app.use(logger('dev'));

app.use('/api', require('./routes/api/movies'));

const port = process.env.PORT || 3001; 
app.listen(port, () => console.log(`Express is running on port: ${port}`));

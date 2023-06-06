const express = require('express');
const { BooksRoutes } = require('./routes/BooksRoutes');
const { WritersRoutes } = require('./routes/WritersRoutes');
const { CountryRoutes } = require('./routes/CountryRoutes');
const { db } = require('./config/db');
const fileUpload = require("express-fileupload");
const path = require('path')

const STATIC = path.join(__dirname, 'public')
exports.STATIC = STATIC

require('dotenv').config();
const cors = require("cors");
db.connect();
const app = express();

app.use(cors());
app.use(fileUpload())
app.use(express.json())

app.use('/api/books', BooksRoutes)
app.use('/api/writers', WritersRoutes)
app.use('/api/countries', CountryRoutes)
app.use('/static', express.static(STATIC))

app.listen(3001);

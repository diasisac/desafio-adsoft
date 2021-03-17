const express = require('express');
const routes = require('../src/routes');

const cors = require('cors');
app.use(cors());

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);
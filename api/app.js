require('dotenv').config()
const express = require("express");
const cors = require('cors');
const {testRoute} = require("./routes");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Router
app.use(testRoute);

app.listen(process.env.PORT || 3000, () => console.log(`Server listening on ${process.env.PORT}`));

require('dotenv').config()
const express = require("express");
const cors = require('cors');
const {indiceRouter} = require("./routes");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Router
app.use(indiceRouter);

app.listen(process.env.PORT || 3000, () => console.log(`Server listening on ${process.env.PORT}`));

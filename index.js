require("dotenv").config();
const express = require("express");

const APIRoutes = require("./api/routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(APIRoutes);

app.listen(port, () => console.log(`App is listening at port ${port}`));

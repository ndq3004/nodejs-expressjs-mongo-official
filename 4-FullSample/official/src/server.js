const mongoose = require('mongoose');
const env = require('dotenv');

env.config({path: "../config.env"});

const app = require("./app")

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => "Mongo db connected!");

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
})
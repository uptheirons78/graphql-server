require('dotenv').config({path: '.env'});
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const database = process.env.DATABASE;

const app = express();

//database connection
mongoose.connect(database);
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Server is running on PORT: ' + process.env.PORT);
})
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema/schema');


const app = express();

app.use('/graphql', graphqlHTTP({
    schema
}));


app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Server is running on PORT: ' + process.env.PORT);
})
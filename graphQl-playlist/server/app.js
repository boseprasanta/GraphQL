const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const app = express();

app.use('/graphql', graphqlHTTP({
	schema
}))

// We'll need Graphiql to make requests to GQL server
app.listen(4000,()=>{
	console.log("Server listening on 4000");
});
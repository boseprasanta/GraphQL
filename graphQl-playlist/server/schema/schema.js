const graphql = require('graphql');

const { GraphQLObjectType,GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
	name : 'Book',
	fields: () => {
		id : { type : GraphQLString },
		name : { type: GraphQLString },
		genre: { type: GraphQLString }
	}
});

// RootQueries are the jump in points into the graph

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLString }},
			resolve(parent, args) {
				// parent will come into play when relations will be introduced
				// code to get date from db / other source
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})
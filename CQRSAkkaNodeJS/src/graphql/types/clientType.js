import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Client',
    fields: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        email: { type: GraphQLString }
    }
});
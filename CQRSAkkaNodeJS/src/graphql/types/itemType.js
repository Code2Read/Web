import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Item',
    fields: {
        code: { type: GraphQLString },
        quantity: { type: GraphQLInt },
        price: { type: GraphQLInt }
    }
});
/*import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLDate,
    GraphQLID,
    GraphQLList
} from 'graphql';
import ItemType from './itemType';

export default new GraphQLObjectType({
    name: 'Order',
    fields: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
        clientId: { type: new GraphQLNonNull(GraphQLID) },
        total: { type: GraphQLInt },
        date: { type: GraphQLDate },
        items:{ type: new GraphQLList(ItemType)}
    }
});
*/
import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
} from 'graphql';
import OrderType from './orderType';
import getProjection from '../queries/get-projection';
import OrderModel from '../../models/order';

export default new GraphQLObjectType({
    name: 'Client',
    fields: {
        _id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        email: { type: GraphQLString },
        orders: {
            type: new GraphQLList(OrderType),
            args: {
                top: {
                    name: 'top',
                    type: GraphQLInt
                },
                priceGt:{
                    name: 'priceGt',
                    type: GraphQLInt
                }
            },
            resolve(root, params, source, options) {
                const projection = getProjection(options.fieldASTs[0]);
                return OrderModel
                .find({ 
                    clientId: root._id, 
                    total: { $gt: params.priceGt ? params.priceGt : 0 } 
                })
                .limit(params.top)
                .select(projection).exec();
            }
        }
    }
});
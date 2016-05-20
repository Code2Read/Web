import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';
import ClientType from '../types/clientType';
import ClientModel from '../../models/client';
import getProjection from './get-projection';

export default  {
    type: new GraphQLList(ClientType),
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, source, options) {
        const projection = getProjection(options.fieldASTs[0]);
        return nullClientModel.findById(params.id).select(projection).exec();
    }
};

import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';
import ClientType from '../types/clientType';
import {ClientModel} from '../../models';
import getProjection from './get-projection';

var client = {
    type: new GraphQLList(ClientType),
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, source, options) {
        //const projection = getProjection(options.fieldASTs[0]);
        return null;//ClientModel.find().select(projection).exec();
    }
};

var clients = {
    type: new GraphQLList(ClientType),
    resolve(root, params, source, options) {
        //const projection = getProjection(options.fieldASTs[0]);
        return null;//ClientModel.find().select(projection).exec();
    }
};

export default { client, clients };
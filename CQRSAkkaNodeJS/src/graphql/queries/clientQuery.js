import {
    GraphQLList,
    GraphQLID
} from 'graphql';
import {ClientType} from '../types';
import {ClientModel} from '../../models';

var client = {
    type: new GraphQLList(ClientType),
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, source, options) {
        const projection = getProjection(options.fieldASTs[0]);
        return ClientModel.find().select(projection).exec();
    }
};

var clients = {
    type: new GraphQLList(ClientType),
    resolve(root, params, source, options) {
        const projection = getProjection(options.fieldASTs[0]);
        return ClientModel.find().select(projection).exec();
    }
};

export default { client, clients };
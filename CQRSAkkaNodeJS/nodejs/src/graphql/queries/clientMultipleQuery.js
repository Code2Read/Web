import {
    GraphQLList
} from 'graphql';
import ClientType from '../types/clientType';
import ClientModel from '../../models/client';
import getProjection from './get-projection';

export default {
    type: new GraphQLList(ClientType),
    resolve(root, params, source, options) {
        const projection = getProjection(options.fieldASTs[0]);
        return ClientModel.find().select(projection).exec();
    }
};

import{
    GraphQLList   
} from 'graphql';
import {Types} from 'mongoose';
import getProjection from './get-projection';
import personType from '../types/person';
import PersonModel from '../../models/person';

export default {
    type: new GraphQLList(personType),
    resolve (root, params,source, options){
        const projection = getProjection(options.fieldASTs[0]);
        return PersonModel.find().select(projection).exec();
    }
}
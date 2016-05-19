import{
    GraphQLID,
    GraphQLNonNull    
} from 'graphql';
import {Types} from 'mongoose';
import getProjection from './get-projection';
import personType from '../types/person';
import PersonModel from '../../models/person';

export default {
    type: personType,
    args: {
        id:{
            name:'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, {id},source, options){
        const projection = getProjection(options.fieldASTs[0]);
        return PersonModel.findById(id).select(projection).exec();
    } 
}
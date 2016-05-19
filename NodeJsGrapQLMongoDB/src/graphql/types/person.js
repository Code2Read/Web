import{
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
    name:'Person',
    fields:{
        _id: {
              type: new GraphQLNonNull(GraphQLID)
        },
        name:{type: GraphQLString},
        lastName:{type: GraphQLString}
    }
});
import mongoose from 'mongoose';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './src/graphql';

var app = express();

app.use('/graphql', graphqlHTTP(req => ({ schema, pretty: true })));

app.get('/api', function (req, res) {
    res.send({ version: 1 });
});

mongoose.connect('mongodb://localhost/cqrs-akka-nodejs');

var server = app.listen(8081, () => {
    console.log('Listening at port', server.address().port);
});
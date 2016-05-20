import mongoose from 'mongoose';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './src/graphql';

var app = express();

app.use('/graphql', graphqlHTTP(req => ({ schema, pretty: true })));

app.get('/api', function (req, res) {
    res.send({ version: 1 });
});

import ClientModel from './src/models/client';
app.get('/clients', function(req, res) {
    ClientModel.find(function(err, clients) {
        if (err) {
            res.send(err);
        } else {
            res.send(clients);
        }
    });
});

import OrderModel from './src/models/order';
app.get('/orders', function(req, res) {
    OrderModel.find(function(err, orders) {
        if (err) {
            res.send(err);
        } else {
            res.send(orders);
        }
    });
});

mongoose.connect('mongodb://localhost/cqrs-akka-nodejs');

var server = app.listen(8081, () => {
    console.log('Listening at port', server.address().port);
});
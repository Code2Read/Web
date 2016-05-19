import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import PersonModel from './src/models/person';
import schema from './src/graphql';

var app = express();
app.use('/graphql',graphqlHTTP(req => ({
    schema,
    pretty: true
})));

app.post('/person', function(req, res) {
    var person = new PersonModel();
    person.name='alex';
    person.lastName='aldazabal';
    
    person.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});


app.get('/person', function(req, res) {
    PersonModel.find(function(err, people) {
        if (err) {
            res.send(err);
        } else {
            res.send(people);
        }
    });
});

mongoose.connect('mongodb://localhost/graphql');

var server = app.listen(8080,() => {
   console.log('Listening at port', server.address().port);
});
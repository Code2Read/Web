import mongoose from 'mongoose';
import Client from '../src/models/client';
import Order from '../src/models/order';

mongoose.connect('mongodb://localhost/cqrs-akka-nodejs');

var clients = [
    {
        _id: 1,
        name: 'Alex',
        address: 'Av Lima',
        email: 'alex@hotmail.com'
    },
    {
        _id: 2,
        name: 'Olivia',
        address: 'Av Cusco',
        email: 'olivia@hotmail.com'
    }
];

var orders = [
    {
        clientId: 1,
        total: 100,
        items: [
            {
                code: 'CP-001',
                quantity: 5,
                price: 50
            },
            {
                code: 'CP-002',
                quantity: 10,
                price: 50
            }
        ]
    },
    {
        clientId: 1,
        total: 50,
        items: [
            {
                code: 'CP-001',
                quantity: 3,
                price: 30
            },
            {
                code: 'CP-002',
                quantity: 5,
                price: 20
            }
        ]
    },
    {
        clientId: 2,
        total: 80,
        items: [
            {
                code: 'CP-001',
                quantity: 8,
                price: 10
            }]
    }
];

mongoose.connection.collections['clients'].drop(function (err) {
    Client.create(clients, function (err, res) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Seed Client data created.');
        }
        deleteOrders();
    });
});

function deleteOrders() {
    mongoose.connection.collections['orders'].drop(function (err) {
        Order.create(orders, function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Seed Order data created.');
            }
            process.exit();
        });
    });
}

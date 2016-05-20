using Akka.Actor;
using Model;
using MongoDB.Bson.Serialization;
using System;

namespace Akka.Core
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BsonClassMap.RegisterClassMap<Order>();

            using (var system = ActorSystem.Create("cqrs-akka-nodejs"))
            {
                //var order = new Order
                //{
                //    ClientId = 1,
                //    Date = DateTime.Now,
                //    Total = 200,
                //    Items = new[] { new Item
                //        {
                //            Code = "P001",
                //            Price = 30,
                //            Quantity = 2
                //        }, new Item
                //        {
                //            Code = "P002",
                //            Price = 70,
                //            Quantity = 4
                //        }}
                //};
                
                //IMongoClient _client = new MongoClient("mongodb://localhost:27017/");
                //IMongoDatabase _database = _client.GetDatabase("cqrs-akka-nodejs");
                //var collection = _database.GetCollection<Order>("orders");
                //collection.InsertOne(order);

                system.ActorOf<OrderCoordinatorActor>("OrderCoordinator");
                Console.WriteLine("Service started...");
                Console.ReadKey();
            }
        }
    }
}

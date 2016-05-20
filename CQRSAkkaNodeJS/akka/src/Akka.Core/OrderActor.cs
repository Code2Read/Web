using Akka.Actor;
using Model;
using MongoDB.Driver;
using System.Threading.Tasks;

namespace Akka.Core
{
    public class OrderActor : ReceiveActor
    {
        public OrderActor()
        {
            ReceiveAsync<Order>(x => SaveOrder(x));
        }

        private async Task SaveOrder(Order order)
        {
            IMongoClient _client = new MongoClient("mongodb://localhost:27017/");
            IMongoDatabase _database = _client.GetDatabase("cqrs-akka-nodejs");
            var collection = _database.GetCollection<Order>("orders");
            await collection.InsertOneAsync(order);
        }
    }
}

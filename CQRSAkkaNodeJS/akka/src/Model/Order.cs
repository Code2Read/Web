using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace Model
{
    public class Order
    {
        [BsonElement("clientId")]
        public int ClientId { get; set; }
        [BsonElement("total")]
        public decimal Total { get; set; }
        [BsonElement("date")]
        public DateTime Date { get; set; }
        [BsonElement("items")]
        public IList<Item> Items { get; set; }
    }

    public class Item
    {
        [BsonElement("code")]
        public string Code { get; set; }
        [BsonElement("quantity")]
        public int Quantity { get; set; }
        [BsonElement("price")]
        public decimal Price { get; set; }
    }

}

using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;

namespace PanelComentario.Models
{
    public class RepositorioMongoDbComentario
    {
protected static IMongoClient _client;
protected static IMongoDatabase _database;

static RepositorioMongoDbComentario()
{
    _client = new MongoClient("mongodb://localhost:27017/PanelComentario");
    _database = _client.GetDatabase("PanelComentario");
}

public static void Agregar(ComentarioModel comentario)
{
    var documento =
        new BsonDocument
        {
            {"Autor", comentario.Autor},
            {"Texto", comentario.Texto},
            {"Identificador", comentario.Identificador},
            {"Fecha", comentario.FechaHora}
        };

    var coleccion = _database.GetCollection<BsonDocument>("Comentarios");
    coleccion.InsertOne(documento);
}

public static IList<ComentarioModel> TraerTodo()
{
    var lista = new List<ComentarioModel>();
    var coleccion = _database.GetCollection<BsonDocument>("Comentarios");

    var filter = new BsonDocument();
    var resultado = coleccion.Find(filter).ToList();

    foreach (var documento in resultado)
    {
        var comentario = new ComentarioModel
        {
            Autor = documento["Autor"].AsString,
            Texto = documento["Texto"].AsString,
            Identificador = documento["Identificador"].AsString,
            FechaHora = documento["Fecha"].AsString
        };
        lista.Add(comentario);
    }

    return lista;
}
    }
}
using System;
using System.Configuration;
using Microsoft.ServiceBus;
using Microsoft.ServiceBus.Messaging;
using PanelComentario.Hubs;
using PanelComentario.Models;

namespace PanelComentario
{
    public class ServiceBusManager
    {
        private static string connectionString =
            ConfigurationManager.AppSettings["Microsoft.ServiceBus.ConnectionString"];

        private const string ColaComentarios= "ComentariosQueue";

        public static void Init()
        {
            CrearCola();
        }

        private static void CrearCola()
        {
            var namespaceManager =
                NamespaceManager.CreateFromConnectionString(connectionString);

            if (!namespaceManager.QueueExists(ColaComentarios))
            {
                namespaceManager.CreateQueue(ColaComentarios);
            }
        }

        public static void EnviarMensaje<T>(T comentario)
        {
            QueueClient Client =
                QueueClient.CreateFromConnectionString(connectionString, ColaComentarios);

            Client.Send(new BrokeredMessage(comentario));
        }

        private static void ProcesarComentario()
        {
            QueueClient Client =
                QueueClient.CreateFromConnectionString(connectionString, ColaComentarios);

            // Configure the callback options.
            OnMessageOptions options = new OnMessageOptions
            {
                AutoComplete = false,
                AutoRenewTimeout = TimeSpan.FromMinutes(1)
            };

            // Callback to handle received messages.
            Client.OnMessage((message) =>
            {
                try
                {
                    var comentario = message.GetBody<ComentarioModel>();
                    RepositorioMongoDbComentario.Agregar(comentario);

                    // Remove message from queue.
                    message.Complete();
                    ComentarioHub.NotificarComentarioNuevo(comentario);
                }
                catch (Exception)
                {
                    // Indicates a problem, unlock message in queue.
                    message.Abandon();
                }
            }, options);
        }
    }
}
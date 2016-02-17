using Microsoft.AspNet.SignalR;
using PanelComentario.Models;

namespace PanelComentario.Hubs
{
public class ComentarioHub : Hub
{
    public static void NotificarComentarioNuevo(ComentarioModel comentario)
    {
        var hubContext = GlobalHost.ConnectionManager.GetHubContext<ComentarioHub>();
        hubContext.Clients.All.agregarComentario(comentario);
    }
}
}
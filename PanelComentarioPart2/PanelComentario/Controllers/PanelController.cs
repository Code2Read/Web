using System;
using System.Web.Mvc;
using System.Web.UI;
using Microsoft.AspNet.SignalR;
using PanelComentario.Hubs;
using PanelComentario.Models;

namespace PanelComentario.Controllers
{
    public class PanelController : Controller
    {

[OutputCache(Location = OutputCacheLocation.None)]
public ActionResult Comentarios()
{
    return Json(RepositorioInMemoryComentario.TraerTodo(), JsonRequestBehavior.AllowGet);
}

[HttpPost]
public ActionResult Comentario(ComentarioModel comentario)
{
    comentario.Identificador = Guid.NewGuid().ToString();

    RepositorioInMemoryComentario.Agregar(comentario);

    NotificarComentarioNuevo();

    return Content(comentario.Identificador);
}

private static void NotificarComentarioNuevo()
{
    var hubContext = GlobalHost.ConnectionManager.GetHubContext<ComentarioHub>();
    hubContext.Clients.All.agregarComentario(RepositorioInMemoryComentario.TraerTodo());
}

        // GET: Panel
        public ActionResult Index()
        {
            return View();
        }
    }
}
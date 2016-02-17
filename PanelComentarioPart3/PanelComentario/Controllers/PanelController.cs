using System;
using System.Linq;
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
    return Json(RepositorioMongoDbComentario.TraerTodo().Reverse(), JsonRequestBehavior.AllowGet);
}

[HttpPost]
public ActionResult Comentario(ComentarioModel comentario)
{
    comentario.Identificador = Guid.NewGuid().ToString();
    comentario.FechaHora = DateTime.Now.ToString("dd-MM-yyyy hh:mm:ss");
    RepositorioMongoDbComentario.Agregar(comentario);

    ComentarioHub.NotificarComentarioNuevo(comentario);

    return Content(comentario.Identificador);
}

        // GET: Panel
        public ActionResult Index()
        {
            return View();
        }
    }
}
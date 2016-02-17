using System.Collections.Generic;
using System.Linq;

namespace PanelComentario.Models
{
    public static class RepositorioInMemoryComentario
    {
        private static readonly IList<ComentarioModel> comentarios;

        static RepositorioInMemoryComentario()
        {
            comentarios = new List<ComentarioModel>
            {
                new ComentarioModel
                {
                    Autor = "Scrumcito",
                    Texto = "Apliquemos scrum a todo",
                    FechaHora="11/11/2011 11:11:11",
                    Identificador="4321"
                },
                new ComentarioModel
                {
                    Autor = "ArquitectoPpt",
                    Texto = "Todo esta en la ppt",
                    FechaHora="12/12/2012 12:12:12",
                    Identificador="1234"
                }
            };
        }

        public static void Agregar(ComentarioModel comentario)
        {
            comentarios.Add(comentario);
        }

        public static IList<ComentarioModel> TraerTodo()
        {
            return comentarios.Reverse().ToList();
        }
    }
}
﻿namespace PanelComentario.Models
{
public class ComentarioModel
{
    public string Identificador { get; set; }
    public string FechaHora { get; set; }
    public string Autor { get; set; }
    public string Texto { get; set; }
    public string IdSesion { get; set; }
    public string IdLocal { get; set; }
}
}
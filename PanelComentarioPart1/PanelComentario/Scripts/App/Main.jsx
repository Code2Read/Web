"use strict";

var data = [
  {
      Autor: "Scrumcito", Texto: "Apliquemos scrum a todo",
      FechaHora: "11/11/2011 11:11:11", Identificador: "4321"
  },
  {
      Autor: "ArquitectoPpt", Texto: "Todo esta en la ppt",
      FechaHora: "12/12/2012 12:12:12", Identificador: "1234"
  }
];

ReactDOM.render(
<PanelComentario data={data} />
, document.getElementById("contenido"));
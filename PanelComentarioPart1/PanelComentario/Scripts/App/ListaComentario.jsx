"use strict"
var ListaComentario = React.createClass({
    render : function (){
        var comentarios = this.props.comentarios.map(function(comentario){
            return <DetalleComentario key={comentario.Identificador} 
                            autor={comentario.Autor} 
                            fechaHora={comentario.FechaHora }>{comentario.Texto}
                   </DetalleComentario>
        }
        );
        return (			
            <div className="list-group">	
                {comentarios}					
            </div>
        );
    }
}
);
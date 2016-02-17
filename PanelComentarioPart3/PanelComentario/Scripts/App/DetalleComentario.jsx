"use strict";
var DetalleComentario = React.createClass({
    render: function () {
        var enProceso = !this.props.fechaHora;
        var mensaje =
            (enProceso ?
            "En proceso...."
            : this.props.fechaHora);
        var estilo =
            (enProceso ?
            "list-group-item disabled"
            : "list-group-item list-group-item-success");
        return (
		    <a href="#" className={estilo}>
			    <h4 className="list-group-item-heading">{this.props.autor}</h4>
                <span className="badge">{mensaje}</span>
			    <p className="list-group-item-text" 
                      dangerouslySetInnerHTML={{__html:this.props.children.toString()}} />
		    </a>
        );
    }
});
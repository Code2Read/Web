"use strict"
var PanelComentario = React.createClass({
    render: function () {
        return (
		    <div className="panelComentarios">
			    <h1>Panel de comentarios</h1>
			    <RegistroComentario />
			    <ListaComentario comentarios={this.props.data}/>
		    </div>
        );
    }
});
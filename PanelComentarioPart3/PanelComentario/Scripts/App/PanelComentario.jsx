"use strict"
var PanelComentario = React.createClass({
    cargarComentarios: function () {
        this.cargarComentariosAPI();
    },
cargarComentariosAPI: function () {
    this.setState({ estadoCargaComentarios: 'EnProgreso' });
    var xhr = new XMLHttpRequest();
    xhr.open('get', this.props.cargarComentariosUrl, true);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alertify.error("No se cargaron los Comentario!");
            this.setState({ estadoCargaComentarios: 'Error' });
            return;
        }
        var data = JSON.parse(xhr.responseText);
        this.setState({ comentarios: data });
        this.setState({ estadoCargaComentarios : 'Cargado'});
    }.bind(this);
    xhr.send();
},
enviarComentarioAPI: function (comentario) {
    comentario.Identificador = new Date().getUTCMilliseconds();
    comentario.IdLocal = new Date().getUTCMilliseconds();
    comentario.Estado = 'SinConfirmar';
    var comentarios = this.state.comentarios;
    comentarios.unshift(comentario);
    this.setState({ comentarios: comentarios });

    var data = new FormData();
    data.append('Autor', comentario.Autor);
    data.append('Texto', comentario.Texto);
    data.append('IdSesion', this.state.idSesion);
    data.append('IdLocal', comentario.IdLocal);

    var xhr = new XMLHttpRequest();
    xhr.open('post', this.props.envioComentarioUrl, true);

    xhr.onload = function () {
        if (xhr.status != 200) {                
            this.errorEnvioRegistroComentario(comentarios);
        }
    }.bind(this);

    xhr.onerror = function () {
        this.errorEnvioRegistroComentario(comentarios);
    }.bind(this);

    xhr.send(data);
},
errorEnvioRegistroComentario: function (comentarios) {
    alertify.error("No se registro el Comentario!");
    comentarios.shift();
    this.setState({ comentarios: comentarios });
},
comentarioAgregadoAPI: function (comentario) {
    var comentarios = this.state.comentarios;

    if (comentario.IdSesion === this.state.idSesion) {
        alertify.success("Comentario registrado!");
        var existeComentario = _.find(comentarios, function (obj) {
            return obj.IdLocal == comentario.IdLocal && obj.Estado === 'SinConfirmar';
        });
        var indiceComentario = _.indexOf(comentarios, existeComentario);
        comentarios.splice(indiceComentario, 1, comentario);
    } else {
        alertify.success("Tiene un nuevo Comentario!");
        comentarios.unshift(comentario);
    }
    this.setState({ comentarios: comentarios });
},
getInitialState: function () {
    return {
        comentarios: [],
        estadoCargaComentarios: '',
        idSesion: ''
    };
},
    componentWillMount: function () {
        this.cargarComentariosAPI();
    },
componentDidMount: function () {
    var comentarioHub = $.connection.comentarioHub;
    var contexto = this;
    $.connection.hub.start().done(function(){ 
        contexto.setState({ idSesion: $.connection.hub.id });
    });
    comentarioHub.client.agregarComentario = this.comentarioAgregadoAPI
},
render: function () {
    var detalle =
        (this.state.estadoCargaComentarios == 'EnProgreso' ?
        <AlertaBotonProgreso /> :
        (this.state.estadoCargaComentarios == 'Error' ?
        <AlertaBotonErrorRefrescar cargarComentarios={this.cargarComentarios }/> :
        <ListaComentario comentarios={this.state.comentarios } />));
    return (
		<div className="panelComentarios">
			<h1>Panel de comentarios</h1>
			<RegistroComentario enviarComentario={this.enviarComentarioAPI}/>
            <br />
			{detalle}
		</div>
    );
}
});